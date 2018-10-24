let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.send('This is the dogs page')
})

module.exports = router
