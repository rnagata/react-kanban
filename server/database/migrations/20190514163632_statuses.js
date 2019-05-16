exports.up = function(knex, Promise) {
  return knex.schema.createTable('statuses', function(table) {
    table.increments();
    table.string('name').notNull();
    table.integer('rank').notNull();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('statuses');
};