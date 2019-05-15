
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {name: 'Low'},
        {name: 'Medium'},
        {name: 'High'},
        {name: 'Blocker'}
      ]);
    });
};
