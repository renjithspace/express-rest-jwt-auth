const express = require('express')
var bodyParser = require('body-parser')
const config = require('./config')
const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes.register(app)

app.listen(config.port, () => console.log(`API server running on port ${config.port}`))
