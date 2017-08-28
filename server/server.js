const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
const port = 3001

mongoose.connect('mongodb://localhost/e-commerce')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

const server = app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = server
