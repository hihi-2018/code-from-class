const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

const base_url = 'https://api.wheretheiss.at/v1'

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/v1/satellites', (req,res) => {
  request.get(base_url + '/satellites')
  .then(res => res.body)
  .then(satellites => {
    console.log(satellites)
    return satellites
  })
  .then(satellites => {
    res.json(satellites)
  })
})

server.get('/v1/satellites/:id', (req,res) => {
  request.get(base_url + '/satellites/' + req.params.id)
  .then(res => res.body)
  .then(satellite => {
    console.log(satellite)
    return satellite
  })
  .then(satellite => {
    res.json(satellite)
  })
})

module.exports = server
