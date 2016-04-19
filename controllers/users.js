var User          = require('../models/user'),
    Chart         = require('../models/chart'),
    express       = require('express'),
    router        = express.Router();

  // ------------------ GET account home ----------------------------
router.get('/', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('account', { title: "My account" });
  } else res.redirect('/login');
})    // ------------------ GET edit account -------------------------
.get('/edit', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('profile-edit', { title: "Edit my account" });
  } else res.redirect('/login');
});

module.exports = router;
