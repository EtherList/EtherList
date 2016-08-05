module.exports = function(express, passport) {
  var routes = express.Router();
  routes.get('/auth', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login.html'
  }));

  routes.get('/auth/return', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });  

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
}
