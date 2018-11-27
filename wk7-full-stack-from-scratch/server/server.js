const express = require('express')
const path = require('path')
const server = express()

const beerRoutes = require('./routes/beers')
const cartRoutes = require('./routes/carts')

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())

server.use('/api/v1/beers', beerRoutes)
server.use('/api/v1/carts', cartRoutes)

module.exports = server
