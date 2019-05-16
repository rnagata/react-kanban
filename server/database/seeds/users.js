
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'User', last_name: 'One', email: 'email@test.com'},
        {first_name: 'User', last_name: 'Two', email: 'email@test.com'},
        {first_name: 'User', last_name: 'Three', email: 'email@test.com'}
      ]);
    });
};
