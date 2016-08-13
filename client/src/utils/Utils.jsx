import $ from 'jquery';

exports.requireAuth = (nextState, replace) => {
  var temp;
  fetch('/profile', {credentials: 'same-origin'}).then(function(response){
    if(response.status !== 200) {
      replace('/login');
    }
    return response.json().then(function(data){
      console.log('fetch data ', data);
      temp = data;
      return data;
    });
  }).catch((err) => {
      console.error(err);
    });

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