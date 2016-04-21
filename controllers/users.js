var User          = require('../models/user'),
    Chart         = require('../models/chart'),
    express       = require('express'),
    router        = express.Router();

  // ------------------ GET account home ----------------------------
router.get('/', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('account', { title: "My account", username: req.session.currentUser});
  } else res.redirect('/login');
})    // ------------------ GET edit account -------------------------
.get('/edit', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('profile-edit', { title: "Edit my account" });
  } else res.redirect('/login');
})
.get('/accountCharts', function(req, res, next) {
    Chart.find({ authorId: req.session.currentUserId }, function(err, chart) {
      res.send(chart);
    })
})

.post('/edit', function(req, res, next) {
  console.log(req);
  // if(req.session.loggedIn === true) {
  //   res.render('profile-edit', { title: "Edit my account" });
  // } else res.redirect('/login');
=======
>>>>>>> development
    });
})
.get('/editChart', function(req, res, next) {
  res.render('edit-chart', { title: "Edit your Chart" });
})
.post('/remove', function(req, res, next) {
  Chart.findOne({ _id: "CHART ID"}, function(err, chart) {
    chart.destory;
  });
<<<<<<< HEAD
  res.redirect('/');
})

.post('/edit', function(req, res, next) {
  console.log(req);
  // if(req.session.loggedIn === true) {
  //   res.render('profile-edit', { title: "Edit my account" });
  // } else res.redirect('/login');
=======
>>>>>>> dev-cam
>>>>>>> development
});


module.exports = router;
