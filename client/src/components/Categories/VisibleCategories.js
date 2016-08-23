import { connect } from 'react-redux';
import * as actions from '../../redux/reducers/categories';
import * as listings from '../../redux/reducers/listings';
import Categories from './Categories.jsx';

const mapStateToProps = (state) => {
  return {
    isLoading: state.categories.isLoading,
    categories: state.categories.categories
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onFetch: () => {
      dispatch(actions.fetch());
    },
    onReceive: (categories) => {
      dispatch(actions.receive(categories));
    },
    onSelect: (category) => {
      dispatch(actions.select(category));
      dispatch(listings.filter('category', category));
    }
  }
};

const VisibleCategories = connect(
  mapStateToProps, mapDispatchToProps)(Categories);

export default VisibleCategories;
