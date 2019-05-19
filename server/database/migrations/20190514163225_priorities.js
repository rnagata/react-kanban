exports.up = function(knex, Promise) {
  return knex.schema.createTable('priorities', function(table) {
    table.increments();
    table.string('name').notNull();
    table.integer('rank').notNull();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};