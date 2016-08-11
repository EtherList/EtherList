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
