module.exports = {
  requireAuth: function(nextState, replace) {
    if (false /*user is not logged in*/) {
      console.log('nope, you cant do that without logging in');
      replace('/login');
    }
  }
}
