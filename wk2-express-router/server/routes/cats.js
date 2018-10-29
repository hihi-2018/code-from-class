let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  // Send a string
  res.send('<h1>This is the cats page</h1>')

  // Send a file
  // res.sendFile('index.html')

  // Render and send to client a template (from the view folder) using provided data
  // res.render('the name of my template', { my_data_object: 'yes!' })

  // Set the status code and send
  // res.sendStatus(404)

  // Set the status but don't send
  // res.status
})

router.get('/:id', (req, res) => {
  res.send('This is the cat page for cat id ' + req.params.id)
})

module.exports = router
