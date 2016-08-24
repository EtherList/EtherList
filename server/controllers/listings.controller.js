const express = require('express');
const Listing = require('../db/models/listing');
const utils = require('../config/utils.js')

function getListings(req, res) {
  let where = {};
  where.completed = req.query.completed || false;
  if (req.query.q) {
    where.$or = [{
      name: { $like: '%' + req.query.q + '%' }
    }, {
      description: { $like: '%' + req.query.q + '%' }
    }];
  }
  if (req.query.userId) {
    where.userId = req.query.userId;
  }
  res.handlePromise(Listing.findAll({ where }));
}

function createListing(req, res) {
  res.handlePromise(Listing.create(req.body));
}

function loadController(app) {
  let routes = express.Router();
  routes.get('/listings', getListings);
  routes.post('/listings', createListing);

  app.use(routes);
}

module.exports = {
  loadController
}
