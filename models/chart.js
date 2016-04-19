var mongoose = require('mongoose');

var ChartSchema = new mongoose.Schema({
  nameOfChart   : String,
  authorId      : Number,
  contents      : String
});

module.exports = mongoose.model('charts', ChartSchema);
