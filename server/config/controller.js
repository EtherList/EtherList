const model = require('./model');
const Category = require('../db/models/category');

const success = (data, res) => res.status(200).send(data);
const error = (error, res) => res.status(500).send(error);

module.exports.listings = {
  get: (req, res) => { 
    model.listings.get()
    .then(data => success(data, res))
    .catch(data => error(error, res));
  },

  post: (req, res) => {
    model.listings.post(req.body)
    .then(data => success(data, res))
    .catch(data => error(error, res));
  },
};

module.exports.categories = {
  get: (req, res) => {
    Category.findAll().then((data) => {
      res.json(data);
    });
  }
};
