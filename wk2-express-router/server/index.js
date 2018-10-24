let server = require('./server')

let PORT = 3000

server.listen(PORT, function() {
  console.log("Server is up on port " + PORT)
})
