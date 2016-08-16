const Sequelize = require('sequelize');
const db = require('../connection.js');

let Listing = db.define('listing', {

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

  // TODO : figure out how best to represent price
  // price :: Either String Number
  price: {
    type: Sequelize.STRING,
    allowNull: true
  },

  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }

  lat: {
    type: Sequelize.FLOAT,
    allowNull: true
  },

  lng: {
    type: Sequelize.FLOAT,
    allowNull: true
  }

});

module.exports = Listing;
