const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getUser(userId) {
  return db('users').where('id', userId).first()
}

function createUser(user) {
  return db('users').insert({ username: user.username })
}

module.exports = {
  getUser,
  createUser,
}
