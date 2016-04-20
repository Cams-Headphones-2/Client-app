var User          = require('../models/user'),
    Chart         = require('../models/chart'),
    express       = require('express'),
    router        = express.Router();

  // ------------------ GET account home ----------------------------
router.get('/', function(req, res, next) {
  console.log(req.session.username);
  if(req.session.loggedIn === true) {
    Chart.find({ authorId: req.session.currentUserId }, function(err, chart) {
      res.send(chart);
      console.log("I found these charts made by " + req.session.username);
    });
    res.render('account', {
      title       : "My account",
      username    : req.session.username
   });
  } else res.redirect('/login');
})    // ------------------ GET edit account -------------------------
.get('/edit', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('profile-edit', { title: "Edit my account" });
  } else res.redirect('/login');
});

module.exports = router;
