var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/sales.db');

// db.run(
// `
//   CREATE TABLE outsources(
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     name VARCHAR(250) NOT NULL
//   )
// `
// )
//
// db.run(
//   `
//   INSERT INTO masters(name, phone_num) VALUES ($name, $phone)
//   `,
//   {
//     $name: 'Тюльпан',
//   }
// )


db.close(() => console.log('DB is closed'));
