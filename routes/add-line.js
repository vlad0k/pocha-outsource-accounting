var express = require('express');
var router = express.Router();

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

var insertDataSQL = `
INSERT INTO hookah_report(product_id, date, personal, admin, comment, outsource_id)
  VALUES
  (
    (SELECT id FROM product WHERE name = $product),
    DATE($date),
    $personal,
    $admin,
    $comment,
    (SELECT id FROM outsources WHERE name = $outsource)
  )
`

router.get('/', function(req, res, next) {
  var query = req.query;

  var sqlite3 = require('sqlite3').verbose();

  var db = new sqlite3.Database('./db/sales.db');

  db.run(
    insertDataSQL,
    {
      $product: query.product,
      $date: query.date,
      $personal: query.personal ? true : false,
      $admin: query.admin ? true : false,
      $comment: query.comment,
      $outsource: query.outsource,
    },
    () => {
      console.log('Data has been imported');
    }
  );

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

    });
  });



module.exports = router;
