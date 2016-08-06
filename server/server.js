var express = require('express');
var db = require('./db/db');

var app = express();
var port = process.env.PORT || 3000;
require('./config/middleware')(app, express);
db.sync().then(() => {
  app.listen(port, function() {
    console.log('Server is listening on port', port);
  });
});
