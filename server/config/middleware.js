var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var auth = require('./auth');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client/public'));
  app.use(routes(express, auth.passport));
  // app.use(routes(listings, auth.passport)); <--Matt will refactor
}
