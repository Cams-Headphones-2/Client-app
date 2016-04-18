var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.sendFile(__dirname + '/index.html')
});


router.get('/testdrag', function(req, res, next) {
  res.render('testdrag', { title: 'testdrag' });
});

router.get('/chart-builder', function(req, res, next) {
  res.render('chart-builder', { title: 'Chart Builder' });
  // res.sendFile(__dirname + '/index.html')
});

module.exports = router;
