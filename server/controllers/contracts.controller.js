const express = require('express');
const Contract = require('../db/models/contract');

function getContracts(req, res) {
  let where = {};
  if (req.query.userId) {
    where.userId = req.query.userId;
  }

  res.handlePromise(Contract.findAll({ where }));
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
