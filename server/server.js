const express = require('express');

let app = express();
require('./config/middleware')(app, express);

module.exports = app;
