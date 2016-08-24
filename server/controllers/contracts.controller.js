const express = require('express');
const Contract = require('../db/models/contract');
const utils = require('../config/utils.js')

function getContracts(req, res) {
  console.log('build out functionality');
}

function createContract(req, res) {
  var vals = {buyerExpressedInterest: true, terms: req.body.terms, listingId: req.body.listing_id};
  var options = {fields: ['buyerExpressedInterest', 'terms']};
  console.log('\n\n\nreq.body from contracts post model is', req.body,'\n\n\n')

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
