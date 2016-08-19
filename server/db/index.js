const connection = require('./connection');
const Listing = require('./models/listing');
const Category = require('./models/category');
const User = require('./models/user');

// Category.hasMany(Listing);
// Listing.belongsTo(Category);
User.hasMany(Listing);
Listing.belongsTo(User);

module.exports = connection;
