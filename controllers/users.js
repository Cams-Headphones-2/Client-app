var User          = require('../models/user'),
    Chart         = require('../models/chart'),
    express       = require('express'),
    router        = express.Router();

  // ------------------ GET account home ----------------------------
router.get('/', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('account', { title: "My account", username: req.session.currentUser});
  } else res.redirect('/login');
})
.get('/accountCharts', function(req, res, next) {
    Chart.find({ authorId: req.session.currentUserId }, function(err, chart) {
      res.send(chart);
    })
})
.get('/editChart', function(req, res, next) {
  res.render('edit-chart', { title: "Edit your Chart" });
})
.post('/edit', function(req, res, next) {
  req.session.chartID = req.body.chartID;
  Chart.find({ _id: req.session.chartID }, function(err, chart){
    console.log(chart);
  })
});


module.exports = router;
