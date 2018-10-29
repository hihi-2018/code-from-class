// Pull in Knex module to talk to the DB
let knex = require('knex')

// Pull in the DB connection config from the knexfile.js
let config = require('./knexfile').development

// Initialise knex using the development config
let db = knex(config)

// Callbacks (this won't work)
// db('people').select(function(err, data) {
//   if (err) {
//     // Do the error thing
//   } else {
//     // Do the data thing
//   }
// })

db('people').select()
.then(function(data){
  // Do the data thing
  console.log('data1!', data)
  return data[0]
})
.then(function(data){
  // Do the data thing
  console.log('data2!', data)
  return data
})
.then(function(data){
  console.log('my data', mydata)
})
.catch(function(err) {
  // Do the error thing
  console.log('error!', err)
})
