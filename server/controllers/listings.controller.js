const express = require('express');
const Listing = require('../db/models/listing');

function getAllListings(req, res) {
  res.handlePromise(Listing.findAll());
}

function createListing(req, res) {
  res.handlePromise(Listing.create(req.body));
}

function loadController(app) {
  let routes = express.Router();
  routes.get('/listings', getAllListings);
  routes.post('/listings', createListing);

  app.use(routes);
}

module.exports = {
  loadController
}
