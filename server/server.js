const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

const utils = require('./config/utils');
const auth = require('./controllers/auth.controller');
const categories = require('./controllers/categories.controller');
const listings = require('./controllers/listings.controller');

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
categories.loadController(app);
listings.loadController(app);
app.use(express.static(__dirname + '/../client/public'));

module.exports = app;
