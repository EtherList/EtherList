const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

const utils = require('./config/utils');
const auth = require('./config/auth.controller');
const listings = require('./config/listings.controller');
const routes = require('./config/routes');

let app = express();

app.use(utils);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
auth.loadController(app);
listings.loadController(app);
app.use(routes(express, auth.passport));
app.use(express.static(__dirname + '/../client/public'));

module.exports = app;
