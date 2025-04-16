const connection = require('../db/db')
const bcrypt = require('bcrypt')

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
    const newUser = req.body;

    bcrypt.hash(newUser.password, 10, (err, hashedPass) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });

        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)'
        const values = [newUser.username, hashedPass]

        connection.query(sql, values, (err, results) => {
            if (err) return res.status(500).json({ status: 'DB error', message: err.message });
            res.json(`Utente registrato con successo: ${results}`)
        });
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