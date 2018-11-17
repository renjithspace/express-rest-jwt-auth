const express = require('express')
const config = require('./config')
const routes = require('./routes')
const middleware = require('./middleware')

const app = express()

middleware.bodyParse(app)
routes.register(app)

app.listen(config.port, () => console.log(`API server running on port ${config.port}`))
