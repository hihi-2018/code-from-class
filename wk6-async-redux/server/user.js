const express = require('express')

const router = express.Router()

const db = require('./db/users')

router.post('/', (req, res) => {
  db.createUser(req.body)
  .then(userIds => userIds[0])
  .then(userId => db.getUser(userId))
  .then(user => {
    res.json({ message: 'Created user ' + user.id + ', username: ' + user.username })
  })
  .catch(err => {
    if(err.message.includes('SQLITE_CONSTRAINT: UNIQUE')) {
      res.status(400).json({ message: 'Error: Username is taken' })
    } else {
      console.log(err, req.body)
      res.status(500).json({ message: 'Dunno....' })
    }
  })
})

module.exports = router
