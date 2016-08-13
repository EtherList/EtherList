import $ from 'jquery';

exports.requireAuth = (nextState, replace) => {
  //Is user logged in?
  if (false /*user is not logged in*/) {
    console.log('nope, you cant do that without logging in');
    replace('/login');
  }
};

exports.ajaxJSON = (url, type, data) => {
  return $.ajax({
    method: type,
    url: url,
    data: data,
    contentType: "application/json",
    success: returnedData => console.log('Successful', type + ':', returnedData),
    dataType: 'json'
  });
};