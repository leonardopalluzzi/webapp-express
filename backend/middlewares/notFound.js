const notFound = (err, req, res, next) => {
    console.error(err.stack)
    req.status(404).send('404')
}

module.exports = notFound