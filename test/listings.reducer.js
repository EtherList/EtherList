import listings, * as actions from '../client/src/redux/reducers/listings.js';
import chai, { expect } from 'chai';
import chaiSubset from 'chai-subset';
chai.use(chaiSubset);

describe('listings reducer', function() {
  it('fetches listings', function() {
    expect(listings(undefined, actions.fetch())).to.containSubset({ listings: []});
  });
  
  it('receives listings', function() {
    let st1 = listings(undefined, actions.fetch());
    let action = actions.receive([{name:'spoon'}, {name: 'fork'}]);
    let st2 = {listings: [{name:'spoon'}, {name: 'fork'}]};
    expect(listings(st1, action)).to.containSubset(st2);
  });
  
});
