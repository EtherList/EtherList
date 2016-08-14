var connection = require('./connection.js');
var Listings = require('./listingModel.js');
var Categories = require('./categoriesModel.js');

Categories.Categories.hasMany(Listings.Listings);
Listings.Listings.belongsTo(Categories.Categories);


module.exports = connection;