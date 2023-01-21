var models = require('../models');
var body = [];

module.exports = {
  get: function (req, res) {
    var callback = (value) =>{
      console.log('VALUE', value);
      res.end(JSON.stringify(value));

    };
    models.messages.getAll(callback);

  }, // a function which handles a get request for all messages
  post: function (req, res) {

    var message = req.body;
    console.log('MESSAGE', message.username);
    models.messages.create(message);
    res.end('Goodbye');
    // req.on('data', (message) => {
    //   const b = Buffer.from(message);
    //   console.log(b);
    //   body.push(b.toString());
    // });
    // req.on('end', function() {
    //   res.writeHead(201, {'Content-Type': 'application/json'});
    //   res.write(body);
    //   res.end('End of Response');
    // });
  } // a function which handles posting a message to the database
};

