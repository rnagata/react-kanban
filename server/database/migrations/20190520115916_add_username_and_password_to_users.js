
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('username').notNull();
    table.string('password').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('username');
    table.dropColumn('password');
  })
};
