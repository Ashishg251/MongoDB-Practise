var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/PackageCount', function(req, res, next) {
  res.render('PackageCount', { title: 'PackageCount' });
});

// router.get('/:param=?', function(req, res, next) {
//   var param = req.params.param;
//   var data = fs.readFileSync('./public/json/package/'+param+'.json');
//   // var processedData = data.toString();
//   res.send(data.toString());
// });

module.exports = router;
