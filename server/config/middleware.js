var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var auth = require('./auth');
var session = require('express-session');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client/public'));
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }));
  app.use(auth.passport.initialize());
  app.use(routes(express, auth.passport));

}
