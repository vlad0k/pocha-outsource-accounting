var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res, next) {
  var query = req.query;
  res.render('enter', {
    master: query.master,
    outsource: query.outsource,
    date: query.date
  });
});

router.post('/', function(req, res, next){
    console.log('post',req);
});
module.exports = router;
