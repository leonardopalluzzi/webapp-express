const connection = require('../db/db')
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

function index(req, res) {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });
        res.json(results)
    })
}

function show(req, res) {

    const id = Number(req.params.id)

    const sql = 'SELECT * FROM reviews WHERE movies.id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });
        if (results.length == 0) return res.status(404).json({ status: 'Not Found', message: 'Movie Not Found' });
        res.json(results)
    })
}

function store(req, res) {
    const newComment = req.body
    console.log(newComment);
    newComment.name = req.user.username

    //console.log(newComment);

    const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?);'
    const values = [newComment.movieId, newComment.name, newComment.vote, newComment.text]

    if (!newComment) res.status(400).json({ message: 'Empty comment' });

    connection.query(sql, values, (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });


        res.json({ state: 'success', message: 'Comment posted successfully' })
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