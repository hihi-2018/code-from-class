let express = require('express')
let server = express()
let animalRoutes = require('./routes/animals')

server.use(express.static('public'))

server.use('/api/v1/animals', animalRoutes)

module.exports = server
