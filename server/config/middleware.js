var morgan = require('morgan');
var bodyParser = require('body-parser');
var auth = require('./auth');
var routes = require('./routes');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client/public'));
  app.use(routes(express, auth.passport()));
}
