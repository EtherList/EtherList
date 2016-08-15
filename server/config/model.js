const Listing = require('../db/models/listing');
const Promise = require('bluebird').Promise;

exports.listings = {
  get: () => Listing.findAll(),
  post: newListing => Listing.create(newListing)
};
