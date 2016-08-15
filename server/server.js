const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

const auth = require('./config/auth');
const routes = require('./config/routes');

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(auth.passport.initialize());
app.use(auth.passport.session());
app.use(routes(express, auth.passport));
app.use(express.static(__dirname + '/../client/public'));

module.exports = app;
