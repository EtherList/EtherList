const Category = require('../db/models/category');

const success = (data, res) => res.status(200).send(data);
const error = (error, res) => res.status(500).send(error);



module.exports.categories = {
  get: (req, res) => {
    Category.findAll().then((data) => {
      res.json(data);
    });
  }
};
