const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

function adminCheck(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ status: 'Not Authorized', message: 'User not logged' });

    // if (isAdmin == 1) return res.status(403).json({ state: 'forbidden', message: "You don't have permission to access here" });

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.status(403).json({ status: 'Error', message: 'Not valid Token' });
        if (user.isAdmin !== 1) return res.status(403).json({ state: 'forbidden', message: 'You are not admin' })

        next();
    })
}

module.exports = adminCheck;