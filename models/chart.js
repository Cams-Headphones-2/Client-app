var mongoose = require('mongoose');

var ChartSchema = new mongoose.Schema({
  authorId      : Number,
  contents      : String
});

module.exports = mongoose.model('Chart', ChartSchema);
