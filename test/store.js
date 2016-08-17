import { createStore } from 'react-redux';
import reducer from '../client/src/redux/reducers';
import * as categories from '../client/src/redux/reducers/categories';
import { expect } from 'chai';


describe('store', function() {
  let store;
  beforeEach(function() {
    store = createStore(reducer);
  });
  describe('categories', function() {
    it('fetches categories', function() {
      store.dispatch(categories.fetch());
      expect(store.getState().categories).to.deep.equal({isLoading: true, categories: []});
    });
  });
});
