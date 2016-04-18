var mongoose = require('mongoose');

var ChartSchema = new mongoose.Schema({
  id            : Number,
  authorId      : Number
});

module.exports = mongoose.model('Chart', ChartSchema);
