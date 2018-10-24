let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.send('This is the cats page')
})

router.get('/:id', (req, res) => {
  res.send('This is the cat page for cat id ' + req.params.id)
})

module.exports = router
