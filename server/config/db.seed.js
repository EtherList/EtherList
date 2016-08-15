const Category = require('../db/models/category');

function findOrCreateCategories() {
  return Category.findOrCreate({where: {name: 'bugs'}})
         .then(() => {
           return Category.findOrCreate({where: {name: 'amateur clown services'}});
         })
         ;
}

module.exports = {
  findOrCreateCategories
};
