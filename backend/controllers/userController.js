const connection = require('../db/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY

function index(req, res) {

    const sql = 'SELECT * FROM users'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });
        res.json(results)
    })
}

function show(req, res) {

    const id = req.params.id
    const user = req.user.username

    const userSql = 'SELECT * FROM users WHERE users.id = ?'
    const userThreadsSql = 'SELECT threads.*, movies.image FROM threads JOIN movies ON threads.movie_id = movies.id WHERE threads.username = ?'
    const userMessagesSql = 'SELECT * FROM messages WHERE messages.username = ?'

    connection.query(userSql, [id], (err, results) => {
        if (err) return res.status(500).json({ status: 'error', message: err.message });
        if (results.legnth == 0) res.status(404).json({ state: 'error', message: 'user not found' });
        const reqUser = results[0]

        connection.query(userThreadsSql, [user], (err, threads) => {
            if (err) return res.status(500).json({ status: 'error', message: err.message });
            const userThreads = threads
            connection.query(userMessagesSql, [user], (err, messages) => {
                if (err) return res.status(500).json({ status: 'error', message: err.message });
                const userMessages = messages

                const userInfo = {
                    ...reqUser,
                    user_threads: [...threads],
                    user_messages: [...userMessages]
                }

                res.json(userInfo)
            })
        })
    })


}

function store(req, res) {
    const newUser = req.body;

    function getCurrentTimestamp() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // I mesi vanno da 0 a 11
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    const creationDate = getCurrentTimestamp()

    if (!newUser.username) return res.status(403).json({ state: 'forbidden', message: 'Username not valid' });
    if (!newUser.password) return res.status(403).json({ state: 'forbidden', message: 'Password not valid' })

    bcrypt.hash(newUser.password, 10, (err, hashedPass) => {
        if (err) return res.status(500).json({ status: 'error', message: err.message });

        const sql = 'INSERT INTO users (username, email, born_in, creation_date, last_login, phone, avatar, password, is_admin) VALUES (?, ?, ?)'
        const values = [newUser.username, newUser.email, newUser.born_in, creationDate, newUser.last_login, newUser.phone, newUser.avatar, hashedPass, newUser.isAdmin]

        connection.query(sql, values, (err, results) => {
            if (err) return res.status(500).json({ state: 'error', message: 'User already registered' });
            res.json({ state: 'success', message: 'User registered correctly' })
        });
    })
}

function login(req, res) {
    //recupero user e pass
    const { username, password } = req.body;

    //verifico l'esistenza dello user
    const sql = 'SELECT * FROM users WHERE users.username = ?';
    const values = username;
    connection.query(sql, [values], (err, results) => {
        if (err) return res.status(500).json({ status: 'error', message: err.message });
        if (results.length == 0) return res.status(403).json({ state: 'forbidden', message: 'User not found' });
        const user = results[0]

        //se esiste decripto e confronto
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ state: 'error', message: err.message });
            if (!isMatch) return res.status(401).json({ state: 'forbidden', message: 'Incorrect password' });

            //se il confornto ha successo genero il token e lo restituisco con la res
            const token = jwt.sign(
                { id: user.id, username: user.username, isAdmin: user.is_admin },
                secret,
                { expiresIn: '1h' }
            )

            res.json({ state: 'success', message: 'Login successfull', id: user.id, username: user.username, password: user.password, token, role: user.is_admin })
        })

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
    destroy,
    login
}