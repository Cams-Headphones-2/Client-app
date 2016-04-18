var express = require('express');
var router = express.Router();

  // ------------------ GET account home ----------------------------
router.get('/', function(req, res, next) {
  res.render('account', { title: "My account" });
})    // ------------------ GET edit account -------------------------
.get('/edit', function(req, res, next) {
  res.render('profile-edit', { title: "Edit my account" });
});

module.exports = router;
