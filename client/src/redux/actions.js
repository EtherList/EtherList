import t from './actionTypes';

export const setUser = (user) => ({
  type: t.SET_USER,
  //assume the user is an object for now
  user: user
});
