const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = {
  post (req, res) {
    const data = req.body
    data.token = jwt.sign(req.body, config.secret)
    
    res.json(data)
  }
}