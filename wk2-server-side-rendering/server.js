let express = require('express')
let server = express()
let hbs = require('express-handlebars')

server.use(express.static(__dirname + '/public'))

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')

// server.get('/', function(req, res){
//   // This is string interpolation
//   res.send(`<h1>Hi there ${req.query.name} it is ${req.query.day}</h1>`)
//   // res.send('<h1>Hi there ' + req.query.name + ' it is ' + req.query.day + '</h1>')
// })

server.get('/', function(req, res){
  res.render('home', {})
})

module.exports = server
