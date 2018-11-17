const jwt = require('jsonwebtoken')
const _ = require('lodash')
const config = require('../config')
const db = require('../db')

module.exports = {
  post (req, res) {
    const data = req.body
    const user = _.find(db.users, data)

    if (!user) return res.status(401).send('Unauthorized')

    data.token = jwt.sign(req.body, config.secret)
    res.json(data)
  }
}