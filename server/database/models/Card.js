const bookshelf = require('../bookshelf');
require('./Priority');
require('./Status');
require('./User');

class Card extends bookshelf.Model{
  get tableName() { return 'cards'; }
  get hasTimestamps() { return true; }

  // one to one
  priority(){
    return this.belongsTo('Priority');
  }

  // one to one
  status(){
    return this.belongsTo('Status');
  }

  // one to one
  createdBy(){
    return this.belongsTo('User');
  }

  // one to many
  assignedTo(){
    return this.belongsTo('User');
  }
}

module.exports = bookshelf.model('Card', Card);