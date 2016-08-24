import { createStore } from 'redux';
import reducer from '../client/src/redux/reducers';
import * as categories from '../client/src/redux/reducers/categories';
import chai from 'chai';
import chaiSubset from 'chai-subset';

const expect = chai.expect;
chai.use(chaiSubset);


describe('store', function() {
  let store;
  beforeEach(function() {
    store = createStore(reducer);
  });
  describe('categories', function() {
    it('fetches categories', function() {
      store.dispatch(categories.fetch());
      expect(store.getState().categories).to.containSubset({isLoading: true, categories: []});
    });
  });
});
