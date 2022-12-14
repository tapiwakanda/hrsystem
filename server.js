const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use('/', require('./routes/Routes'))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))