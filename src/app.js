const express = require('express')
const config = require('./config')

const app = express()

app.get(config.endpoint, (request, response) => {
  response.json({ env: 'live', version: '1.0.0', status: 'up' })
})

app.listen(config.port, () => console.log(`API server running on port ${config.port}`))