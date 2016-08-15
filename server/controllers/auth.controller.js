const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../db/models/user');

// Middleware
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.status(401);
    res.end();
  }
};

function loadController(app) {
  // Configure passport
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

  passport.deserializeUser((id, done) => {
   User.findById(id).then(user => {
    done(null, user);
   }).catch((err) => {
    console.error(err);
   });
  });

  // Routes
  let routes = express.Router();
  routes.get('/auth/facebook', passport.authenticate('facebook'));
  routes.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }));
  routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  // TODO : maybe move this elsewhere
  routes.get('/profile', isAuth, function(req, res) {
    res.json(req.user);
  });

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(routes);
}

module.exports = {
  loadController,
  isAuth
};
