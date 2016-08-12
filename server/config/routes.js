var controller = require('./controller');

module.exports = function(express, passport) {
  var routes = express.Router();

  routes.get('/auth/facebook', passport.authenticate('facebook'));

  routes.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/fail'
  }));

  routes.get('/fail', function(req, res){
    res.end('ok');
  });

  routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  routes.get('/listings', controller.listings.get);
  routes.post('/listings', controller.listings.post);

  return routes;
};
