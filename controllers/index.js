var User          = require('../models/user'),
    Chart         = require('../models/chart'),
    express       = require('express'),
    router        = express.Router(),
    bcrypt        = require('bcrypt'),
    dbSalt        = bcrypt.genSaltSync(10);

    // ------------------ GET home -------------------------
router.get('/', function(req, res, next) {
  // check if person is logged in?
  res.render('index', { title: 'MU Builder' });
}) // ------------------ GET logout -------------------------
.get('/logout', function(req, res, next) {
  req.session.loggedIn = null;
  req.session.currentUserId = null;
  console.log('You have been logged out.');
  res.redirect('/');
}) // ------------------ GET register ------------------------
.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
}) // ------------------ POST register -----------------------
.post('/register', function(req, res, next) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user) {
      console.log('This user already exists.');
      res.redirect('/register');
    } else {
        User.create({
          username      : req.body.username,
          passwordHash  : bcrypt.hashSync(req.body.passwordHash, dbSalt),
          email         : req.body.email,
      }, function(err, user) {
        req.session.loggedIn = true;
        req.session.currentUserId = user._id;
        var currentUser = user.username;
        console.log('-----------------------------');
        console.log(req.session);
        console.log('-----------------------------');
        console.log(req.session.currentUserId);
        console.log('-----------------------------');
        console.log("You have created an account under the name "+ currentUser +" and been logged in.");
        res.redirect('/');
      });
    }
  });
}) // ------------------ GET login ---------------------------
.get('/login', function(req, res, next) {
  if (req.session.loggedIn === true) {
    console.log("You're already logged in!");
    res.redirect('/');
  } else res.render('login', { title: 'Login'});
}) // ------------------ POST login --------------------------
.post('/login', function(req, res, next) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user) {
      var enteredPassword = req.body.passwordHash;
      var comparison = bcrypt.compareSync(enteredPassword, user.passwordHash);
      if (comparison === true) {
        req.session.loggedIn = true;
        req.session.currentUserId = user._id;
        var currentUser = user.username;
        console.log("Welcome to the site, "+ currentUser);
        res.redirect('/');
      } else {
          console.log("The username or password you entered was incorrect.");
          res.redirect('/login');
      }
    } else {
        console.log("User doesn't exist.");
        res.redirect('/register');
      }
  });
}) // ------------------ GET chart-builder --------------------
.get('/build', function(req, res, next) {
  // if(req.session.loggedIn === true) {
    res.render('chart-builder', { title: 'Build a chart' });
  // } else res.redirect('/login');
})
.get('/account', function(req, res, next) {
  // if(req.session.loggedIn === true) {
    res.render('account', { title: 'My charts' });
  // } else res.redirect('/login');
})
.post('/build', function(req, res, next) {
  var contents = req.body
  console.log(req.body)
  Chart.create({
    nameOfChart : "NAME OF CHART",
    authorId    : req.session.currentUserId,
    contents    : contents
  }, function(err, chart) {
    console.log("You have created a chart!");
    res.redirect('/users');
  })
})

.get('/chartviewer', function(req, res, next) {
  // if(req.session.loggedIn === true) {
    res.render('chart-viewer', { title: 'View a Chart' });

  // } else res.redirect('/login');
})

module.exports = router;
