if (process.env.NODE_ENV !== 'production') require('dotenv').config();
var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    Handlebars = require('handlebars');

require('./db/database.js');

var routes = require('./controllers/index');
var users = require('./controllers/users');
var charts = require('./controllers/charts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
Handlebars.registerHelper('navbar_if', function(a,b) {
  if(req.session.loggedIn === true) {
    return true;
  } else {
    return false;
  }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// set up sessions for users
app.use(session({
  secret: "literallyeverything",
  resave: false,
  saveUninitialized: false
}));
// end sessions

// How to handle conditional display of navbar???


app.use('/', routes);
app.use('/account', users);
app.use('/charts', charts)

// How to handle conditional display of navbar???
// app.use(function(req, res, next) {
//
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// production 404 handler
app.use(function(err, req, res, next) {
  res.status(404);
  res.render('404', { title: "/Mu/sic Chart Generator | Not Found", message: "Well, this is embarassing. Something went wrong and now here you are... Rest assured our code monkeys lost their recess in order to fix this problem."});
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.render('404', { title: "/Mu/sic Chart Generator | DENIED", message: "I'm sorry Dave, I can't let you do that. Permission dened."});
})

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
