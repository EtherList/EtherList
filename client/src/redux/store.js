var { createStore } = require('redux');
import { combineReducers } from 'redux'
import * as reducers from './reducers';



const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp


// let store = createStore(todos, [ 'Use Redux' ])

// store.dispatch({
//   type: 'GET_CATEGORIES',
//   categories: 
// })



// console.log(store.getState())