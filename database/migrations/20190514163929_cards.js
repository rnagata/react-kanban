exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
    table.increments();
    table.string('title', 255).notNull();
    table.string('body', 1024).notNull();
    table.integer('priority_id').references('id').inTable('priorities');
    table.integer('status_id').references('id').inTable('statuses');
    table.integer('created_by').references('id').inTable('users');
    table.integer('assigned_to').references('id').inTable('users');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};