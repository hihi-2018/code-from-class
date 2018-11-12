
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, name: 'Dog'},
        {id: 2, name: 'Cat'},
        {id: 3, name: 'Mouse'},
        {id: 4, name: 'Capybara'},
        {id: 5, name: 'Lion'},
        {id: 6, name: 'Donkey'},
      ]);
    });
};
