export const FETCH = 'CATEGORIES_FETCH';
export const RECEIVE = 'CATEGORIES_RECEIVE';

const initialState = {
  isLoading: false,
  categories: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return Object.assign({}, state, {
        isLoading: true
      });
    case RECEIVE:
      return Object.assign({}, state, {
        isLoading: false,
        categories: action.categories
      });
    default:
      return state
  }
}

export function fetch() {
  return {
    type: FETCH
  };
}

export function receive(categories) {
  return {
    type: RECEIVE,
    categories
  };
}
