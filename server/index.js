var db = require('./db/db');
var app = require('./server.js');
var Categories = require('./db/categoriesModel.js');
var port = process.env.PORT || 3000;

db.sync({force: process.env.DROPTABLE})
.then(() => {
  return Categories.Categories.findOrCreate({where: {name: 'bugs'}});
})
.then(() => {
  return Categories.Categories.findOrCreate({where: {name: 'amateur clown services'}});
})
.then(() => {
  app.listen(port, function() {
    console.log('Server is listening on port', port);
  });
});

module.exports = app;
