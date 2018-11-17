const db = require('../db')

module.exports = {
  get (req, res) {
    res.json(db.books)
  }
}