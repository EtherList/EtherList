var controller = require('./controller');
var auth = require('./auth.controller');

module.exports = function(express, passport) {
  var routes = express.Router();

  routes.get('/fail', function(req, res){
    res.end('"ok"');
  });

  routes.get('/profile', auth.isAuth, function(req, res) {
    res.json(req.user);
  });

  routes.get('/login', function(req, res) {
    res.end('"ok"');
  });

  routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  routes.get('/listings', controller.listings.get);
  routes.post('/listings', controller.listings.post);

  routes.get('/categories', controller.categories.get);

  return routes;
};
