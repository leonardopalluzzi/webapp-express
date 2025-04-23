const connection = require('../db/db')
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

function index(req, res) {

    const sql = 'SELECT threads.*, movies.image FROM threads JOIN movies ON threads.movie_id = movies.id'

    connection.query(sql, (err, results) => {

        if (err) return res.status(500).json(err.message);
        res.json(results)
    })
}

function show(req, res) {

    const id = Number(req.params.id)
    console.log(id);


    const sql = "SELECT threads.id AS thread_id, threads.title AS thread_title, threads.username AS thread_author, threads.creation_date AS thread_creation_date, movies.title AS movie_title, movies.director AS movie_director, movies.genre AS movie_genre, movies.release_year AS movie_release_year, movies.abstract AS movie_description, movies.image AS movie_image FROM threads JOIN movies ON threads.movie_id = movies.id WHERE threads.id = ?;"

    const messagesSql = 'SELECT * FROM messages WHERE thread_id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });
        if (results.length == 0) return res.status(404).json({ status: 'Not Found', message: 'Movie Not Found' });
        const threadMovieDetails = results[0]

        connection.query(messagesSql, [threadMovieDetails.thread_id], (err, messagesRes) => {
            if (err) return res.status(500), json(err.message);
            const thread = {
                ...threadMovieDetails,
                messages: messagesRes
            }
            res.json(thread)
        })
    })
}

function store(req, res) {
    const newThread = req.body
    newThread.name = req.user.username

    function getCurrentTimestamp() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Mesi da 0 a 11
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    const creationDate = getCurrentTimestamp();

    const sql = 'INSERT INTO threads (movie_id, title, username, creation_date) VALUES (?, ?, ?, ?)'
    const values = [newThread.movieId, newThread.title, newThread.name, creationDate]

    if (!newThread) res.status(400).json({ message: 'Empty thread' });

    connection.query(sql, values, (err, results) => {
        if (err) return res.status(500).json(err.message);


        res.json({ state: 'success', message: 'Thread posted successfully' })
    })

}

function update(req, res) {

}

function modify(req, res) {

}

function destroy(req, res) {

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}