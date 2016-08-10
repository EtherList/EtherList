var db = require('../db/userModel');
var Promise = require('bluebird').Promise;

exports.listings = {
  get: () => db.Listings.findAll(),
  post: newListing => db.Listings.create(newListing)
}