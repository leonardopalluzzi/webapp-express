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

    const sql = 'SELECT * FROM threads WHERE movies_id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });
        if (results.length == 0) return res.status(404).json({ status: 'Not Found', message: 'Movie Not Found' });
        res.json(results)
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

    const creatioDate = getCurrentTimestamp();

    const sql = 'INSERT INTO threads (movie_id, title, username, creation_date) VALUES (?, ?, ?, ?)'
    const values = [newThread.movieId, newThread.title, newThread.name, creatioDate]

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