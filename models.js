const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

var User = new Schema ({
  twitterId: String,
  pools: {type: Array, "polls": []}
});
User.plugin(findOrCreate);
var User = mongoose.model('User', User);

module.exports = User;
