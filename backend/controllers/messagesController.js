const connection = require('../db/db')
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

function index(req, res) {

    const sql = 'SELECT * FROM messages'

    connection.query(sql, (err, results) => {

        if (err) return res.status(500).json(err.message);
        res.json(results)
    })
}

function show(req, res) {

    const id = Number(req.params.id)
    console.log(id);


    const sql = "SELECT * FROM messages WHERE messages.id = ?"

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });
        if (results.length == 0) return res.status(404).json({ status: 'Not Found', message: 'Movie Not Found' });
        res.json(results)
    })
}

function store(req, res) {
    const newMessage = req.body
    newMessage.name = req.user.username

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

    const sql = 'INSERT INTO messages (thread_id, username, content, creation_date) VALUES (?, ?, ?, ?)'
    const values = [newMessage.thread_id, newMessage.name, newMessage.content, creationDate]

    if (!newMessage) res.status(400).json({ message: 'Empty thread' });

    connection.query(sql, values, (err, results) => {
        if (err) return res.status(500).json(err.message);


        res.json({ state: 'success', message: 'Message posted successfully' })
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