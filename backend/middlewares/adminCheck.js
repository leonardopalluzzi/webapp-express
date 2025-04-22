function adminCheck(req, res, next) {
    const isAdmin = req.body.isAdmin

    if (isAdmin == 1) return res.status(403).json({ state: 'forbidden', message: "You don't have permission to access here" });

    next();
}

module.exports = adminCheck;