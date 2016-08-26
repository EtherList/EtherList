const initialState = {
  contracts: [],
  error: null
};

const CONTRACTS_FETCH = 'etherlist/contracts/FETCH';
const CONTRACTS_RECEIVE = 'etherlist/contracts/RECEIVE';
const CONTRACTS_FAIL = 'etherlist/contracts/FAIL';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CONTRACTS_FETCH:
      return state;
    case CONTRACTS_RECEIVE:
      return Object.assign({}, state, {
        contracts: action.contracts
      });
    case CONTRACTS_FAIL:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};

export function fetch() {
  return {
    type: CONTRACTS_FETCH,
  };
};

export function receive(contracts) {
  return {
    type: CONTRACTS_RECEIVE,
    contracts
  };
};

export function fail(error) {
  return {
    type: CONTRACTS_FAIL,
    error
  };
};
