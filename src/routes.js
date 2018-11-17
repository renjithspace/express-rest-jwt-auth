const config = require('./config')

const register = app => {
  app.get(config.endpoint, (request, response) => {
    response.json({ env: 'live', version: '1.0.0', status: 'up' })
  })
}

module.exports = { register }