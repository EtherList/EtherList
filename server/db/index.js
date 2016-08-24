const connection = require('./connection');
const Listing = require('./models/listing');
const Category = require('./models/category');
const User = require('./models/user');
const Contract = require('./models/contract');

Category.hasMany(Listing);
Listing.belongsTo(Category);

User.hasMany(Listing);
Listing.belongsTo(User);

Listing.hasMany(Contract);
Contract.belongsTo(Listing);

module.exports = connection;
