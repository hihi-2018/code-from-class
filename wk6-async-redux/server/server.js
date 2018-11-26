const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const userRoutes = require('./user')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())

server.use('/api/v1/reddit', redditRoutes)
server.use('/api/v1/users', userRoutes)

module.exports = server
