const config = require('./config')
const controllers = require('./controllers')

const register = app => {
  app.get(`${config.endpoint}/auth`, (req, res) => controllers.auth.get(req, res))
  app.get(`${config.endpoint}/books`, (req, res) => controllers.books.get(req, res))
}

module.exports = { register }