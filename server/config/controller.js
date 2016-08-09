var model = require('./model');

exports.newListing = function(req, res) {
  return model.newListing(req.body).then(function(data) {
    res.status(200).send(JSON.stringify(data));
  }).catch(function(error) {
    res.status(500).send('nope, model didn\'t work');
  });
}