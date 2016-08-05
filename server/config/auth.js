var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FB_ID,
  clientSecret: process.env.FB_SECRET,
  callbackURL: '/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done){

  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    if (err) {
      return done(err);
    }
    return done(null, user);
  });

}
));

passport.serializeUser((id, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
 //define what to do, given that we don't store users in a database
});

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = {
  passport,
  isAuth
};
