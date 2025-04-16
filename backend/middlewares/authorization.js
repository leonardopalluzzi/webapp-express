const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');


function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ status: 'Not Authorized', message: 'User not logged' });

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.status(403).json({ status: 'Error', message: 'Not valid Token' });
        req.user = user;

        next();
    })
}

module.exports = authToken;