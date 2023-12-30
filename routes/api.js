var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  res.send({ 'name': req.query.name });
});

router.get('/sum', function(req, res, next) {
  var num1 = parseInt(req.query.num1);
  var num2 = parseInt(req.query.num2);
  var sum = num1 + num2;
  res.send({ 'result': sum });
});

module.exports = router;