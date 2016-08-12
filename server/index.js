var db = require('./db/db');
var app = require('./server.js');
var port = process.env.PORT || 3000;

db.sync({force: process.env.DROPTABLE}).then(() => {
  app.listen(port, function() {
    console.log('Server is listening on port', port);
  });
});

module.exports = app;
