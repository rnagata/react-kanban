
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {title: 'Card Title', body: 'blahblahblahblahblahblahblahblahblahblahblahblah', priority_id: 1, status_id: 1, created_by: 1, assigned_to: 1},
        {title: 'Card Title', body: 'blahblahblahblahblahblahblahblahblahblahblahblah', priority_id: 2, status_id: 2, created_by: 2, assigned_to: 2},
        {title: 'Card Title', body: 'blahblahblahblahblahblahblahblahblahblahblahblah', priority_id: 3, status_id: 3, created_by: 3, assigned_to: 3}
      ]);
    });
};
