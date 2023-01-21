var db = require('../db');
var connection = db.dbConnection;

// connection.query('insert into users (username) values('jake'), ('josh'), ('jack')')
module.exports = {
  getAll: function (callback) {
    connection.query('SELECT * from messages', function(err, result) { //
      if(err) {
        console.log(err)
      }else{
        callback(result)
      }
    });
    //console.log('THE RESITFY', result);
  }, // a function which produces all the messages
  create: function (message) {
    //{"username": "Jake", "message": "bppm", "user_id": 2}
    console.log('MESSAGE HERE ', message);
    // eslint-disable-next-line camelcase
    const {text, username, user_id} = message;
    // eslint-disable-next-line camelcase
    connection.query(`INSERT INTO messages(message, username, user_id) values( '${text}', '${username}', ${user_id}) `);
    // insert into messages (message, username, user_id) values ('Hello, World!', 'jake', 1 ), ('Goodbye, World!', 'josh', 2)
  } // a function which can be used to insert a message into the database
};
