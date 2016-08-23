var connection = require('./connection.js');
var Listings = require('./listingModel.js');
var Categories = require('./categoriesModel.js');
var Contracts = require('./contractModel.js');
var User = require('./userModel.js');

//Categories One-to-Many Listings
Categories.Categories.hasMany(Listings.Listings);
Listings.Listings.belongsTo(Categories.Categories);

//Listings One-to-Many Contracts
Listings.Listings.hasMany(Contracts.Contracts);
Contracts.Contracts.belongsTo(Listings.Listings);

//Users One-to-Many Listings
User.User.hasMany(Listings.Listings);
Listings.Listings.belongsTo(User.User);

//Contracts Many-to-Many Users
// Contracts.Contracts.hasMany(User.User);
// User.User.belongsTo(Contracts.Contracts);

module.exports = connection;