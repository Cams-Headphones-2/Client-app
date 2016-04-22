var User          = require('../models/user'),
    Chart         = require('../models/chart'),
    express       = require('express'),
    router        = express.Router();

// ------------------ GET chart-builder --------------------
router.get('/build', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('chart-builder', { title: '/Mu/sic Chart Generator | Chart Builder' });
  } else res.redirect('/login');
})
.post('/build', function(req, res, next) {
  Chart.create({
    nameOfChart : req.body.nameOfChart,
    authorId    : req.session.currentUserId,
    contents    : req.body.chart
  }, function(err, chart) {
    console.log("You have created a chart!");
    // console.log(db.chart.find({}));
    res.redirect('/account');
  })
})
// ---------------- VIEW CHART ------------------
.post('/viewchart', function(req, res, next) {
    req.session.chartID = req.body.chartID;
    Chart.findOne({ _id: req.body.chartID }, function(err, chart) {
      if (chart) {
        res.render('chart-viewer', { title: '/Mu/sic Chart Generator | View Chart' })
      } else res.redirect('/account');
    });
}) // ---------------- get CHART for Ajax call ------------------
.get('/getchart', function(req, res, next) {
   Chart.findOne({ _id: req.session.chartID }, function(err, chart) {
     if (chart) {
       res.send(chart);
     } else console.log("no such chart exists");
   });
}) // ---------------- Delete chart ------------------
.post('/delete', function(req, res, next) {
  Chart.remove({ _id: req.body.chartID }, true);
  res.redirect('/account');
})
.post('/edit', function(req, res, next) {
  Chart.findByIdAndUpdate(req.session.chartID, { nameOfChart: req.body.nameOfChart, contents: req.body.chart }, function (err, chart) {
  console.log(chart);
  })
  res.redirect('/account')

})
.get('/edit', function(req, res, next) {
    req.session.chartID = req.body.chartID;
    Chart.findOne({ _id: req.body.chartID }, function(err, chart) {
      if (chart) {
        res.render('chart-viewer', { title: 'View a Chart' })
      } else res.redirect('/account');
    });
})
.get('/api/:id', function(req, res, next) {
  Chart.findById(req.params.id, function(err, chart) {
    if (err) return next(err);
    res.json(chart);
  });
});

module.exports = router;
