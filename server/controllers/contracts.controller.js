const express = require('express');
const Contract = require('../db/models/contract');
const utils = require('../config/utils.js')

function getContracts(req, res) {
  console.log('build out functionality');
}

function createContract(req, res) {
  var vals = {buyerComments: req.body.terms, listingId: req.body.listing_id, buyerId: req.body.buyerId, sellerId: req.body.sellerId};
  var options = {fields: ['buyerComments', 'listingId', 'buyerId', 'sellerId']};
  res.handlePromise(Contract.create(vals, options));
}

function loadController(app) {
  let routes = express.Router();
  routes.get('/contracts', getContracts);
  routes.post('/contracts', createContract);

  app.use(routes);
}

module.exports = {
  loadController
}
