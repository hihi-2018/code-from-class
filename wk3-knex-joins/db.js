const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUsersAndVehicles: getUsersAndVehicles
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function getUsersAndVehicles (testConn) {
  const conn = testConn || connection
  console.log(conn('users')
  .join('vehicles', 'vehicles.user_id', 'users.id')
  .select('*', 'users.id AS uid', 'vehicles.id AS vid').toString())
  return conn('users')
  .join('vehicles', 'vehicles.user_id', 'users.id')
  .select('*', 'users.id AS id')
  // .then(removeIds)
}

function removeIds(data) {
  return data.map(item => {
    delete item.id
    return item
  })
}
