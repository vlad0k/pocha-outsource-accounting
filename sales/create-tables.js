// db.run(
// `
//   CREATE TABLE tulpan(
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     product VARCHAR(20) NOT NULL,
//     date DATE NOT NULL,
//     personal BOOL,
//     admin BOOL,
//     comment TEXT
//   )
// `
// )

// db.run(
//   `
//   INSERT INTO tulpan(product, date, admin, comment) VALUES ($product, $date, $admin, $comment)
//   `,
//   {
//     $product: 'strong',
//     $date: Date.now(),
//     $admin: true,
//     $comment: 'Женя'
//   }
// )

// db.run(
// `
//   CREATE TABLE masters(
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     name VARCHAR(250) NOT NULL,
//     phone_num VARCHAR(15)
//   )
// `
// )
// 
// db.run(
//   `
//   INSERT INTO masters(name, phone_num) VALUES ($name, $phone)
//   `,
//   {
//     $name: 'vlad',
//     $phone: '0660429745'
//   }
// )
