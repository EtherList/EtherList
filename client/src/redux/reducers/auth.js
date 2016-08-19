const initialState = {
  user: null,
  message: null
};

const LOGIN_ATTEMPT = 'etherlist/user/LOGIN_ATTEMPT';
const LOGIN_SUCCESS = 'etherlist/user/LOGIN_SUCCESS';
const LOGIN_FAIL = 'etherlist/user/LOGIN_FAIL';
const LOGOUT = 'etherlist/user/LOGOUT';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return state;
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: action.user
      }); 
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        message: action.message
      });
    case LOGOUT:
      return Object.assign({}, state, {
        user: null
      });
    default:
      return state;
  }
}

export function loginAttempt () {
  return {
    type: LOGIN_ATTEMPT
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}
export function loginFail(message) {
  return {
    type: LOGIN_FAIL,
    message
  };
}
export function logOut () {
  return {
    type: LOGOUT
  };
}
