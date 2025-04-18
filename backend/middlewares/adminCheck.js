function adminCheck(req, res, next) {
    const isAdmin = req.user.isAdmin

    if (!isAdmin) return res.status(403).json({ state: 'forbidden', message: "You don't have permission to access here" });

    next();
}

module.exports = adminCheck;