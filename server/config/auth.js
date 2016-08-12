var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../db/userModel');


passport.use(new FacebookStrategy({
  clientID: process.env.FB_ID || 'INVALID_FB_ID',
  clientSecret: process.env.FB_SECRET || 'INVALID_FB_SECRET',
  callbackURL: '/auth/facebook/callback',
  profileFields: ['id', 'picture.type(large)', 'displayName']
},
function(accessToken, refreshToken, profile, done){
  console.log('FB call ', profile._json.picture.data.url);
  User.User.findOrCreate({where: {
    facebookId: profile.id
  }, defaults: {
    name: profile.displayName,
    wallet: 'none',
    privateKey: 'none',
    imageURL: profile.photos[0].value
  }}).spread(function(user, created) {
    console.log('user ', user.get({
      plain: true
    }))
    // console.log('created ',created);
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
    res.redirect('/login');
  }

};

passport.deserializeUser((id, done) => {

 User.User.findById(id).then(user => {
  done(null, user);
 }).catch((err) => {
  console.error(err);
 });
});

module.exports = {
  passport,
  isAuth
};
