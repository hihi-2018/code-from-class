
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vehicles', table => {
    table.increments('id').primary()
    table.string('plate_number')
    table.string('make')
    table.string('model')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vehicles')
};
