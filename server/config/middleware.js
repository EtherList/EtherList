var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var auth = require('./auth');
var session = require('express-session');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  app.use(auth.passport.initialize());
  app.use(auth.passport.session());
  app.use(routes(express, auth.passport));
  app.use(express.static(__dirname + '/../../client/public'));
};
