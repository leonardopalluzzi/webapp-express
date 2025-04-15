const connection = require('../db/db')

function index(req, res) {

    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });
        res.json(results)
    })
}

function show(req, res) {

    const id = Number(req.params.id)

    const sql = 'SELECT * FROM movies WHERE movies.id = ?'
    const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ status: 'DB error', message: err.message });
        if (results.length == 0) return res.status(404).json({ status: 'Not Found', message: 'Movie Not Found' });
        const movie = results[0]

        connection.query(sqlReviews, [movie.id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ status: 'DB error', message: err.message });
            console.log(reviewsResults);

            const review = reviewsResults.map(item => {
                const { name, vote, text } = item
                const rev = {
                    name,
                    vote,
                    text
                }
                return rev
            })

            movie.reviews = review
            res.json(movie)
        })
    })
}

function store(req, res) {

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