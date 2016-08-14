var db = require('./connection.js');
var Sequelize = require('sequelize');
var bluebird = require('bluebird');

exports.User = db.define('user', {

  facebookId: {
    type: Sequelize.STRING,
    allowNull: false
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  wallet: {
    type: Sequelize.STRING,
    allowNull: true
  },

  //TODO: make sure it is never sent out
  privateKey: {
    type: Sequelize.STRING,
    allowNull: true
  },

  imageURL: {
    type: Sequelize.STRING,
    allowNull: true
  }
});
