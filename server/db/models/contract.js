const Sequelize = require('sequelize');
const db = require('../connection.js');

let Contract = db.define('contract', {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  //Foreign keys include: 
  //  (1) buyer user_id  --> many to many
  //  (2) seller user_id /
  //  (3) listing_id --> one to many

  terms: {
    type: Sequelize.STRING,
    allowNull: true
  },

  //Step 1: Buyer expresses interest and contract appears in profile pages for buyer/seller
  buyerExpressedInterest: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },

  //Step 2: Buyer & seller must initiate before other fields may change
  buyerInitiated: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },

  sellerInitiated: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },

  //Step 3: feedback
  //Buyer's feedback
  buyerMarkedClosed: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },

  buyerMarkedCompleted: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },

  buyerRepScoreOfSeller: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  buyerComments: {
    type: Sequelize.STRING,
    allowNull: true
  },

  //Seller's feedback
  sellerMarkedClosed: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },

  sellerMarkedComplete: {
    type: Sequelize.BOOLEAN,
    allowNull: true
  },

  sellerRepScoreOfBuyer: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  sellerComments: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Contract;
