var Sequelize = require('sequelize');

var db = new Sequelize('ether', 'ether', '', {
  host: 'postgres',
  dialect: 'postgres'
});

module.exports = db;
