const express = require('express');
const Listing = require('../db/models/listing');

function getListings(req, res) {
  let q = req.query.q;
  q = q || '';

  res.handlePromise(Listing.findAll({
    where: {
      $or: [
        {
          name: {
            $like: '%' + q + '%'
          }
        },
        {
          description: {
            $like: '%' + q + '%'
          }
        }
      ]
    }
  }));
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
