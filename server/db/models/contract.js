const Sequelize = require('sequelize');
const db = require('../connection.js');

let Contract = db.define('contract', {

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

  buyerId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  sellerId: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

module.exports = Contract;
