var db = require('./connection.js');
var Sequelize = require('sequelize');
var bluebird = require('bluebird');

exports.Listings = db.define('listings', {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

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

  lat: {
    type: Sequelize.FLOAT,
    allowNull: true
  },

  lng: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
});

