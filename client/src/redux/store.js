const { createStore } = require('redux');
import reducer from './reducers';
import { fetchAuthStatus, fetchListings } from '../utils/utils';

export const store = createStore(reducer);
fetchAuthStatus(store);
fetchListings(store);
