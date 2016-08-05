module.exports = function(express, passport) {
  var routes = express.Router();

  routes.get('/', function(req, res) {
    res.send('ok');
  });

  routes.get('/auth/facebook', passport.authenticate('facebook'));

  routes.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });  
  return routes;
}
