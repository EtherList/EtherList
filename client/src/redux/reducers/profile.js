const initialState = {
  profile: {
    name: '',
    imageURL: '',
    wallet: ''
  }
};

const PROFILE_FETCH = 'etherlist/user/PROFILE_FETCH';
const PROFILE_RECEIVE = 'etherlist/user/PROFILE_RECEIVE';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case PROFILE_FETCH:
      return state;
    case PROFILE_RECEIVE:
      return Object.assign({}, state, {
        profile: action.profile
      });
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

