const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../db/models/user');

passport.use(new FacebookStrategy({
  clientID: process.env.FB_ID || 'INVALID_FB_ID',
  clientSecret: process.env.FB_SECRET || 'INVALID_FB_SECRET',
  callbackURL: '/auth/facebook/callback',
  profileFields: ['id', 'picture.type(large)', 'displayName']
},
function(accessToken, refreshToken, profile, done){
  User.findOrCreate({where: {
    facebookId: profile.id
  }, defaults: {
    name: profile.displayName,
    wallet: 'none',
    privateKey: 'none',
    imageURL: profile.photos[0].value
  }}).spread(function(user, created) {
    done(null, user);
  });
}
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.status(401);
    res.end();
  }
};

passport.deserializeUser((id, done) => {
 User.findById(id).then(user => {
  done(null, user);
 }).catch((err) => {
  console.error(err);
 });
});

module.exports = {
  passport,
  isAuth
};
