const config = require('./config')
const controllers = require('./controllers')
const jwt = require('jsonwebtoken')

function verify(req, res, next) {
  const token = req.headers.authorization
  const forbidden = () => res.status(403).send('Forbidden')

  if (!token) return forbidden()

  jwt.verify(token, config.secret, (error, data) => {
    if (error) return forbidden()
    next()
  })
}

const register = app => {
  app.post(`${config.endpoint}/auth`, (req, res) => controllers.auth.post(req, res))
  app.get(`${config.endpoint}/books`, verify, (req, res) => controllers.books.get(req, res))
}

module.exports = { register }