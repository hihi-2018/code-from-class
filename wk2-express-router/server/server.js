let express = require('express')
let server = express()

server.use(express.static(__dirname + '/../public'))
server.use(express.urlencoded({ extended: true }))

let catRoutes = require('./routes/cats')
let dogRoutes = require('./routes/dogs')
let ratRoutes = require('./routes/rats')

server.use('/cats', catRoutes)
server.use('/dogs', dogRoutes)
server.use('/rats', ratRoutes)

server.post('/', (req, res) => {
  console.log(req.body)
  res.send('OK')
})

// server.get('/cats', (req, res) => {
//   res.send('This is the cats page')
// })

// server.get('/cats/:id', (req, res) => {
//   res.send('This is the cat page for cat id ' + req.params.id)
// })

// server.get('/dogs', (req, res) => {
//   res.send('This is the dogs page')
// })
//
// server.get('/rats', (req, res) => {
//   res.send('This is the rats page')
// })

module.exports = server
