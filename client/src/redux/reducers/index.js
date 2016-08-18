import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categories';
import auth from './auth';

export default combineReducers({
  categories,
  auth
});
