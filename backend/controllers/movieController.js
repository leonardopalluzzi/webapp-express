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
            //console.log(reviewsResults);

            const review = reviewsResults.map(item => {
                const { id, name, vote, text } = item
                const rev = {
                    id,
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

    const newMovie = req.body
    const cover_image = req.file.filename

    const sql = 'INSERT INTO movies (title, abstract, director, genre, image) VALUES (?, ?, ?, ?, ?)'
    const values = [newMovie.title, newMovie.abstract, newMovie.director, newMovie.genre, cover_image,]

    connection.query(sql, values, (err, results) => {
        console.log(err);


        if (err) return res.status(500).json({ state: 'error', message: err.message });
        return res.json({ state: 'success', message: 'Book added correctly' });
    })

    //l'img va presa da req.file.filename

}

function update(req, res) {

}

function modify(req, res) {
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

    const currentTimestamp = getCurrentTimestamp()
    const changes = req.body

    const sql = 'UPDATE movies SET title = ?, director = ?, genre = ?, abstract = ?, image = ?, updated_at = ?  WHERE id = ?'
    const values = [req.body.title, req.body.director, req.body.genre, req.body.content, req.body.image, currentTimestamp, req.body.id]

    connection.query(sql, values, (err, results) => {
        if (err) return res.status(500).json({ state: 'error', message: err.message });
        console.log(results);

        return res.json({ state: 'success', message: 'movie updated correctly' })
    })
}

function destroy(req, res) {

    const sql = 'DELETE FROM movies WHERE id = ?'
    const id = Number(req.params.id)
    console.log(id);



    connection.query(sql, [id], (err, results) => {
        console.log(results);

        if (err) return res.status(500).json({ state: 'error', message: err.message });
        //if (results.affectedRows == 0) return res.status(404).json({ state: 'error', message: 'Movie not found' });

        return res.sendStatus(204)
    })
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}