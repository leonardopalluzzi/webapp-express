const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors')
const movieRouter = require('./routers/movieRouter');
const serverError = require('./middlewares/serverError');
const notFound = require('./middlewares/notFound')
const commentsRouter = require('./routers/commentsRouter')

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

app.use(express.static('./public'))

app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/movies/comments', commentsRouter)

app.use(serverError)

app.use(notFound)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})