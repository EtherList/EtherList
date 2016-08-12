var db = require('../db/listingModel');
var Promise = require('bluebird').Promise;

exports.listings = {
  get: () => db.Listings.findAll(),
  post: newListing => db.Listings.create(newListing),
}