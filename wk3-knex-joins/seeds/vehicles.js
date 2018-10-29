
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {id: 1, plate_number: 'CAR333', user_id: 99903},
        {id: 2, plate_number: 'CAR222', user_id: 99901},
        {id: 3, plate_number: 'CAR111', user_id: 99901}
      ]);
    });
};
