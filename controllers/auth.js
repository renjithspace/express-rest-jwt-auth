const jwt = require('jsonwebtoken')
const _ = require('lodash')
const config = require('../config')
const db = require('../db')

module.exports = {
  post (req, res) {
    const data = req.body
    const isValidRequest = data && data.api_key
    const isValidUser = _.find(db.users, data)

    if (!isValidRequest || !isValidUser) return res.status(401).send('Unauthorized')

    data.token = jwt.sign(req.body, config.secret)
    res.json(data)
  }
}
