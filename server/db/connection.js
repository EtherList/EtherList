var Sequelize = require('sequelize');

var connection = new Sequelize('ether', 'ether', '', {
  host: 'postgres',
  dialect: 'postgres'
});

module.exports = connection;
