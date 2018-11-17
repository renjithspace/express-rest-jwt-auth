const jwt = require('jsonwebtoken')
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

module.exports = { verify }