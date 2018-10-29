
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, full_name: 'Person1', age: 13, favourite_colour: 'red'},
        {id: 2, full_name: 'Person2', age: 23, favourite_colour: 'yellow'},
        {id: 3, full_name: 'Person3', age: 33, favourite_colour: 'pink'}
      ]);
    });
};
