
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cart_items', table => {
    table.increments('id').primary()
    table.integer('cart_id')
    table.integer('beer_id')
    table.integer('quantity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cart_items')
};
