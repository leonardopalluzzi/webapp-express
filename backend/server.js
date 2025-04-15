const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors')
const movieRouter = require('./routers/movieRouter')


app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

app.use(express.static('./public'))

app.use('/api/v1/movies', movieRouter)

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})