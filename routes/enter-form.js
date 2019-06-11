var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var getTableSQL =`
SELECT p.name product, r.personal, r.admin, r.comment
  FROM hookah_report r, product p
  WHERE
    r.date = $date
    AND
    r.outsource_id = (
      SELECT id FROM outsources WHERE name = $outsource
    )
    AND
    r.product_id=p.id
`


router.get('/', function(req, res, next) {
  var query = req.query;
  var sqlite3 = require('sqlite3').verbose();

  var db = new sqlite3.Database('./db/sales.db');

  db.all(getTableSQL,
    {
      $date: query.date,
      $outsource: query.outsource,
    },
    (err, rows) => {
      var cash = 0;
      for (i of rows){
        if(!(i.admin || i.personal)){
          cash += {
            'strong': 215,
            'premium': 190,
            'light': 155
          }[i.product]
        }
      }

      res.render('enter', {
        master: query.master,
        outsource: query.outsource,
        date: query.date,
        table: rows,
        cash: cash
      });
    }
  )

  db.close(() => console.log('DB is closed'));
});

module.exports = router;
