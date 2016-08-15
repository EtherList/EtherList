var controller = require('./controller');

module.exports = function(express, passport) {
  var routes = express.Router();
  routes.get('/categories', controller.categories.get);
  return routes;
};
