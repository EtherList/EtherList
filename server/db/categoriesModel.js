var db = require('./connection.js');
var Sequelize = require('sequelize');

exports.Categories = db.define('categories', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  totalPosts: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  }
});
