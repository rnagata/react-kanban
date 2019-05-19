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
    return this.hasOne('User', 'id', 'created_by')
  }

  // one to many
  assignedTo(){
    return this.hasOne('User', 'id', 'assigned_to');
  }
}

module.exports = bookshelf.model('Card', Card);