const initialState = {
  profile: {
    name: '',
    imageURL: '',
    wallet: ''
  }
};

const PROFILE_FETCH = 'etherlist/user/PROFILE_FETCH';
const PROFILE_RECEIVE = 'etherlist/user/PROFILE_RECEIVE';
const PROFILE_FETCH_USER_CONTRACTS = 'etherlist/user/FETCH_USER_CONTRACTS';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case PROFILE_FETCH:
      return state;
    case PROFILE_RECEIVE:
      return Object.assign({}, state, {
        profile: action.profile
      });
    case PROFILE_FETCH_USER_CONTRACTS:
      return state;
    default:
      return state;
  }
};

export function profileFetch() {
  return {
    type: PROFILE_FETCH
  };
};

export function profileReceive(profile) {
  return {
    type: PROFILE_RECEIVE,
    profile
  };
};

export function profileFetchUserContracts() {
  return {
    type: PROFILE_FETCH_USER_CONTRACTS
  };
}

export function profileFetchUserListings() {
  return {
    type: PROFILE_FETCH_USER_LISTINGS
  };
}
