const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

var User = new Schema ({
  google: String,
  twitter: String,
  facebook: String,
  pools: {type: Array, default: []}
});
User.plugin(findOrCreate);
var User = mongoose.model('User', User);

module.exports = User;
