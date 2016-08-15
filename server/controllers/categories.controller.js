const express = require('express');
const Category = require('../db/models/category');

function getAllCategories(req, res) {
  res.handlePromise(Category.findAll());
}

function loadController(app) {
  let routes = express.Router();
  routes.get('/categories', getAllCategories);
  app.use(routes);
}

module.exports = {
  loadController
};
