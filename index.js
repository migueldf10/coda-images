const express = require('express')
const app = express()
const userRoutes = require('./routers/user')
const imageRoutes = require('./routers/image')
const port = process.env.PORT || 4000

app.listen(port, () => console.log(`The image server here... listening at http://localhost:${port}`))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/users', userRoutes)
app.use('/images', imageRoutes)