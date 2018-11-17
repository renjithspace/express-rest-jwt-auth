const config = require('./config')
const controllers = require('./controllers')

const register = app => {
  app.post(`${config.endpoint}/auth`, (req, res) => controllers.auth.post(req, res))
  app.get(`${config.endpoint}/books`, (req, res) => controllers.books.get(req, res))
}

module.exports = { register }