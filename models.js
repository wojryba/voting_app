const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');


var Poll = new Schema({
  user: String,
  title: String,
  options: {type: Array, default: []}
})
Poll.plugin(findOrCreate);
var Poll = mongoose.model('Poll', Poll);
module.exports = Poll;
