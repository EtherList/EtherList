var db = require('../db/userModel');
var Promise = require('bluebird').Promise;

exports.newListing = function(newListing) {
  return db.Listings.create(newListing);
}