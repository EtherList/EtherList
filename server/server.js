var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
require('./config/middleware')(app, express);

app.listen(port, function() {
  console.log('Server is listening on port', port);
});
