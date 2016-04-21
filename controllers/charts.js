var User          = require('../models/user'),
    Chart         = require('../models/chart'),
    express       = require('express'),
    router        = express.Router();

// ------------------ GET chart-builder --------------------
router.get('/build', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('chart-builder', { title: 'Build a chart' });
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
        res.render('chart-viewer', { title: 'View a Chart' })
      } else res.redirect('/account');
    });
}) // ---------------- get CHART ------------------
.get('/getchart', function(req, res, next) {
   Chart.findOne({ _id: req.session.chartID }, function(err, chart) {
     if (chart) {
       console.log(chart);
       res.send(chart);
     } else console.log("no such chart exists");
   });
}) // ---------------- Delete chart ------------------
.post('/delete', function(req, res, next) {
  console.log(req.body.chartID);
  Chart.remove({ _id: req.body.chartID }, true);
  res.redirect('/account');
})
.post('/edit', function(req, res, next) {
  console.log(req.session.chartID);
  console.log(req.body.nameOfChart);
  console.log('hey man we tried to update it')
  Chart.findByIdAndUpdate(req.session.chartID, { nameOfChart: req.body.nameOfChart, contents: req.body.chart }, function (err, chart) {
  console.log(chart);
  })

})

.get('/edit', function(req, res, next) {
    req.session.chartID = req.body.chartID;
    Chart.findOne({ _id: req.body.chartID }, function(err, chart) {
      if (chart) {
        res.render('chart-viewer', { title: 'View a Chart' })
      } else res.redirect('/account');
    });
})

.post('/save', function(req, res, next) {

});

module.exports = router;
