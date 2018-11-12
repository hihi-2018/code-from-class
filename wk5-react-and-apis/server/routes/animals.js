let express = require('express')
let router = express.Router()
let db = require('../db/animals')

router.get('/', (req, res) => {
  db.getAnimals()
  .then(animals => {
    res.json(animals)
  })
  .catch(err => {
    console.log(err)
    res.json({error: 'Something went wrong...'})
  })
})

module.exports = router
