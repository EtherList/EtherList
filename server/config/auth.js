var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FB_ID,
  clientSecret: process.env.FB_SECRET,
  callbackURL: '/auth/return'
},
function(accessToken, refreshToken, profile, done){
  //define what to do, given that we don't store users in a database

}
));

passport.serializeUser((id, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
 //define what to do, given that we don't store users in a database
});

module.exports = {
  passport
};
