const app = require('./server');
const db = require('./db');
const Category = require('./db/models/category');
const port = process.env.PORT || 3000;

db.sync({force: process.env.DROPTABLE})
.then(() => {
  return Category.findOrCreate({where: {name: 'bugs'}});
})
.then(() => {
  return Category.findOrCreate({where: {name: 'amateur clown services'}});
})
.then(() => {
  app.listen(port, function() {
    console.log('Server is listening on port', port);
  });
});

module.exports = app;
