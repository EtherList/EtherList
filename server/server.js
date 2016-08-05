var express = require('express');
var morgan = requrie('morgan');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.listen(port, function() {
  console.log('Server is listening on port', port);
});
