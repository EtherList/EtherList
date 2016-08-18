const initialState = {
  listings: [],
  error: null
};

const LISTINGS_FETCH = 'etherlist/listings/FETCH';
const LISTINGS_RECEIVE = 'etherlist/listings/RECEIVE';
const LISTINGS_FAIL = 'etherlist/listings/FAIL';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LISTINGS_FETCH:
      return state;
    case LISTINGS_RECEIVE:
      return Object.assign({}, state, {
        listings: action.listings
      });
    case LISTINGS_FAIL:
      return state;
    default:
      return state;
  }
};

export function fetch() {
  return {
    type: LISTINGS_FETCH
  };
};

export function receive(listings) {
  return {
    type: LISTINGS_RECEIVE,
    listings
  };
};

export function fail(error) {
  return {
    type: LISTINGS_FAIL,
    error
  };
};

