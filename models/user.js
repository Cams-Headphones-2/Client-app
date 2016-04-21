var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username      : String,
  email         : String,
  passwordHash  : String
});

module.exports = mongoose.model('users', UserSchema);
