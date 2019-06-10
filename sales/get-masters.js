var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/sales.db');

db.get('SELECT name FROM masters', (err, rows) => {
    module.exports =rows
});

db.close(() => console.log('DB is closed'));
