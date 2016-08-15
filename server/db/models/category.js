const Sequelize = require('sequelize');
const db = require('../connection.js');

let Category = db.define('category', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  numPosts: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  }

});

module.exports = Category;
