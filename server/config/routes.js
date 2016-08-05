module.exports = function(express, passport) {
  var routes = express.Router();

  routes.get('/', function(req, res) {
    res.send('ok');
  });

  routes.get('/auth', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  routes.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });  

}
