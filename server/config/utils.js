function utils(req, res, next) {
  /**
   * Responds to a client request based on the
   * outcome of the given promise.
   * @param  {Promise} promise Promise to evaluate
   * @return {Promise}         [description]
   */
  res.handlePromise = function(promise) {
    return promise
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.end(error.toString());
    });
  }
  next();
}

module.exports = utils;
