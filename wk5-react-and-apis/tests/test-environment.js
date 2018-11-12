let knex = require('knex')
let config = require('../knexfile').test

function buildTestDbConnection() {
  return knex(config)
}

function setupDb(dbConnection) {
  return dbConnection.migrate.latest()
  .then(() => {
    return db.seed.run()
  })
}

function tearDownDbConnection(dbConnection) {
    return dbConnection.destroy()
}

module.exports = {
  buildTestDbConnection,
  setupDb,
  tearDownDbConnection,
}
