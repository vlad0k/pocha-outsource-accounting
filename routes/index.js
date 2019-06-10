var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('./db/sales.db');

  db.all('SELECT DISTINCT m.name mname, o.name oname FROM masters m, outsources o', (err, rows) => {

    var masters = [];
    var outsources = [];

    for (i of rows){
      masters.push(i.mname);
      if (outsources.indexOf(i.oname) == -1){
        outsources.push(i.oname)
      }
    }

    function nowDate(){
      var today = new Date();
      return today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    }
    res.render('index', {
      title: 'Express',
      'masters': masters,
      'outsources': outsources,
      'nowDate': nowDate()
    });
  });

  db.close(() => console.log('DB is closed'));
});

module.exports = router;
