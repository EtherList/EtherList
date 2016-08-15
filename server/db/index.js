const connection = require('./connection.js');
const Listing = require('./models/listing.js');
const Category = require('./models/category.js');

Category.hasMany(Listing);
Listing.belongsTo(Category);

module.exports = connection;
