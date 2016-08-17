import auth, * as actions from '../client/src/redux/reducers/auth.js';
import chai, { expect } from 'chai';
import chaiSubset from 'chai-subset';
chai.use(chaiSubset);

describe('auth reducer', function() {
  let user;
  beforeEach(function() {
    user = {
      name: 'casssssper'
    };
  })
  it('logs in successfully', function() {
    expect(auth(undefined, actions.loginSuccess(user))).to.containSubset({user: user});
  });
  
  it('fails to log in', function() {
    let state = auth(undefined, actions.loginFail('that\'s it'));
    expect(state.message).to.be.ok;
    expect(state.user).to.be.null;
  });

  it('logs out', function() {
    let state = auth(undefined, actions.loginSuccess(user));
    expect(auth(undefined, actions.logOut())).to.containSubset({user: null});
  });
  
});
