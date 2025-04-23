const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors')
const movieRouter = require('./routers/movieRouter');
const serverError = require('./middlewares/serverError');
const notFound = require('./middlewares/notFound')
const commentsRouter = require('./routers/commentsRouter')
const userRouter = require('./routers/userRouter')
const threadRouter = require('./routers/threadsRouter')

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json({ limit: '10mb' }))

app.use(express.static('./public'))

app.use('/api/v1/movies/users', userRouter)
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/movies/comments', commentsRouter)
app.use('/api/v1/movies/threads', threadRouter)

app.use(serverError)

app.use(notFound)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})