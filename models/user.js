var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id            : Number,
  username      : String,
  email         : String,
  passwordHash  : String
});

module.exports = mongoose.model('User', UserSchema);
