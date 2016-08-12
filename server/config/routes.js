var controller = require('./controller');
var auth = require('./auth');

module.exports = function(express, passport) {
  var routes = express.Router();

  routes.get('/auth/facebook', passport.authenticate('facebook'));

  routes.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/fail'
  }));

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

  return routes;
};
