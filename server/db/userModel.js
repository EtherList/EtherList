var db = require('./db');
var Sequelize = require('sequelize');
var bluebird = require('bluebird');

exports.User = db.define('user', {

  facebookId: {
    type: Sequelize.STRING,
    allowNull: false
  },

  wallet: {
    type: Sequelize.STRING,
    allowNull: true
  },

  privateKey: {
    type: Sequelize.STRING,
    allowNull: true
  },

  imageURL: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

exports.Listings = db.define('listings', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: true
  },

  location: {
    type: Sequelize.STRING,
    allowNull: true
  },

  time: {
    type: Sequelize.STRING,
    allowNull: true
  }, 

  reputation: {
    type: Sequelize.STRING,
    allowNull: true
  },

  price: {
    type: Sequelize.STRING,
    allowNull: true
  },

  terms: {
    type: Sequelize.STRING,
    allowNull: true
  },
});
