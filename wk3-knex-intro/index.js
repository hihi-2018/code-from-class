// Pull in Knex module to talk to the DB
let knex = require('knex')

// Pull in the DB connection config from the knexfile.js
let config = require('./knexfile').development

// Initialise knex using the development config
let db = knex(config)

// Print out a query
console.log(db('people').select('full_name').toString())

// Raw SQL
// SELECT * FROM 'people'
db('people').select().then((people) => {
  for(let i = 0; i < people.length; i++) {
    let person = people[i]
    console.log('name:', person.full_name)
  }
})

// Print out a query
console.log(db('people').where('age', '>', 5).where('full_name', 'LIKE', '%3%').select().toString())

db('people').where('full_name', 'LIKE', '%3%').select().then((people) => {
  for(let i = 0; i < people.length; i++) {
    let person = people[i]
    console.log('name:', person.full_name)
  }
})

// Insert a person into the people table, do not provide an id
db('people').insert([{ full_name: 'Ross' }])

// Update a record
db('people').where('id', 3).update({ full_name: 'Ross' })

// Delete a record
db('people').where('id', 3).del()
