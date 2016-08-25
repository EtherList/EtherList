const Sequelize = require('sequelize');
const db = require('../connection.js');

let Contract = db.define('contract', {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  contractAddress: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  contractCompleted: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },

  buyerComments: {
    type: Sequelize.STRING,
    allowNull: true
  },

  sellerComments: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Contract;
