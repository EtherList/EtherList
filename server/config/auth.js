var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../db/userModel');

passport.use(new FacebookStrategy({
  clientID: process.env.FB_ID || 'INVALID_FB_ID',
  clientSecret: process.env.FB_SECRET || 'INVALID_FB_SECRET',
  callbackURL: '/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done){
  console.log('User ', User);
  User.User.findOrCreate({where: { facebookId: profile.id }, defaults: {
    wallet: 'none', privateKey: 'none', imageURL: 'none'
  }}).spread(function(user, created) {
    console.log('user ', user.get({
      plain: true
    }))
    console.log('created ',created);
    done(null, user);
  });

}
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {

 User.User.findById(id).then(user => {
  done(null, user);
 });
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
