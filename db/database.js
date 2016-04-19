var mongoose = require('mongoose');

var connectionString = process.env.DB;
console.log(process.env.DB);

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Mongoose is connected to: ' + connectionString);
});

mongoose.connection.on('error', function(error) {
  console.log('Mongoose has encounted an error: '+ error);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected from: '+ connectionString);
});
