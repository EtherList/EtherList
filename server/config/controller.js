var model = require('./model');
var Categories = require('../db/categoriesModel.js');

var success = (data, res) => res.status(200).send(data);
var error = (error, res) => res.status(500).send(error);

exports.listings = {
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

exports.categories = {
  get: (req, res) => {
    Categories.Categories.findAll().then((data) => {
      res.json(data);
    });
  }
};
