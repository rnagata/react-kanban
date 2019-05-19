const bookshelf = require('../bookshelf');

class User extends bookshelf.Model{
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  created() {
    return this.hasMany('Card', 'cards');
  }

  assignedTo() {
    return this.hasMany('Card', 'cards');
  }
}

module.exports = bookshelf.model('User', User);