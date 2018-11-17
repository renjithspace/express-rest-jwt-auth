const config = require('./config')
const controllers = require('./controllers')
const middleware = require('./middleware')

const register = app => {
  app.post(`${config.endpoint}/auth`, (req, res) => controllers.auth.post(req, res))
  app.get(`${config.endpoint}/books`, middleware.verify, (req, res) => controllers.books.get(req, res))
}

module.exports = { register }
