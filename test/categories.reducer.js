import categories, * as actions from '../client/src/redux/reducers/categories.js';
import { expect } from 'chai';

describe('categories reducer', function() {
  it('fetches categories', function() {
    expect(categories(undefined, actions.fetch())).to.deep.equal({isLoading: true, categories: []});
  });
  
  it('receives categories', function() {
    let st1 = categories(undefined, actions.fetch());
    let action = actions.receive(['bugs', 'amateur clown services']);
    let st2 = {isLoading: false, categories: ['bugs', 'amateur clown services']};
    expect(categories(st1, action)).to.deep.equal(st2);
  });
  
});
