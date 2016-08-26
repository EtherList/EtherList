import { loginSuccess, loginFail } from '../redux/reducers/auth';
import { store } from '../redux/store';

export function fetchAuthStatus(store) {
  fetch('/auth/status', {credentials: 'same-origin'}).then((response) => {
    if(response.status !== 200) {
      store.dispatch(loginFail('attempted login on load, failed'));
    } else {
      return response.json().then((user) => {
        store.dispatch(loginSuccess(user));
      }); 
    }
  }).catch((err) => {
    store.dispatch(loginFail(err));
    console.error(err);
  });
};

export function fetchListings(store, keyword) {
  fetch(`/listings${keyword ? '?q=' + keyword : ''}`).then((response) => {
    if(response.status !== 200) {
      store.dispatch({type: 'etherlist/listings/FAIL', error});
    } else {
      return response.json().then((listings) => {
        store.dispatch({type: 'etherlist/listings/RECEIVE', listings});
      }); 
    }
  }).catch((err) => {
    console.error(err);
    store.dispatch({type: 'etherlist/listings/FAIL', error: err});
  });
};

export function fetchContracts(store, userId) {
    fetch(`/contracts${userId ? '?q=' + userId : ''}`).then((response) => {
      if(response.status !== 200) {
        store.dispatch({type: 'etherlist/contracts/FAIL', error});
      } else {
        return response.json().then((contracts) => {
          store.dispatch({type: 'etherlist/contracts/RECEIVE', contracts});
        }); 
      }
    }).catch((err) => {
      console.error(err);
      store.dispatch({type: 'etherlist/contracts/FAIL', error});
    });
  };
