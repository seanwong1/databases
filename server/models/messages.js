var db = require('../db');
//var connection = db.dbConnection;

// connection.query('insert into users (username) values('jake'), ('josh'), ('jack')')
module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function () {
    // var message = req.body;
    // console.log(message);
    //connection.query(`INSERT INTO messages (${message})`
    // connection.execute('select 1 + ? + ? as result', [5, 6], (err, rows) => {
    //   // rows: [ { result: 12 } ]
    //   // internally 'select 1 + ? + ? as result' is prepared first. On subsequent calls cached statement is re-used
    // });
  } // a function which can be used to insert a message into the database
};
