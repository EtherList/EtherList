const { createStore } = require('redux');
import reducer from './reducers';

export const store = createStore(reducer);
