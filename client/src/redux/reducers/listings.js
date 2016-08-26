const initialState = {
  visibilityFilter: (listing) => true,
  listings: [],
  error: null
};

const LISTINGS_FILTER = 'etherlist/listings/FILTER';
const LISTINGS_FETCH = 'etherlist/listings/FETCH';
const LISTINGS_RECEIVE = 'etherlist/listings/RECEIVE';
const LISTINGS_FAIL = 'etherlist/listings/FAIL';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LISTINGS_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.visibilityFilter
      });
    case LISTINGS_FETCH:
      return state;
    case LISTINGS_RECEIVE:
      return Object.assign({}, state, {
        listings: action.listings
      });
    case LISTINGS_FAIL:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};

export function filter(filterType, filterObject) {
  let visibilityFilter;
  switch(filterType) {
    case 'category':
      visibilityFilter = listing => listing.categoryId === filterObject.id;
      break;
    case 'user':
      visibilityFilter = listing => listing.userId === filterObject.id;
      break;
    case 'none':
      visibilityFilter = listing => true;
      break;
    default:
      visibilityFilter = listing => true;
      break;
  }
  return {
    type: LISTINGS_FILTER,
    visibilityFilter
  }
}

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

