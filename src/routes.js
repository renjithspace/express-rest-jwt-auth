const config = require('./config')
const controllers = require('./controllers')

const register = app => {
  app.get(`${config.endpoint}/books`, (request, response) => controllers.books.get(request, response))
}

module.exports = { register }