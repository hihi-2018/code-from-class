let knex = require('knex')
let config = require('../../knexfile').development
let conn = knex(config)

function getAnimals(testDb) {
  let db = testDb || conn
  return db('animals').select()
}

module.exports = {
  getAnimals
}
