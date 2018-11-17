const jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')
const config = require('./config')

const verify = (req, res, next) => {
  const token = req.headers.authorization
  const forbidden = () => res.status(403).send('Forbidden')

  if (!token) return forbidden()

  jwt.verify(token, config.secret, (error, data) => {
    if (error) return forbidden()
    next()
  })
}

const bodyParse = app => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
}

module.exports = { verify, bodyParse }