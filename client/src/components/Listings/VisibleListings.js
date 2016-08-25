import { connect } from 'react-redux';
import * as actions from '../../redux/reducers/listings';
import { select } from '../../redux/reducers/categories';
import Listings from './Listings.jsx';

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings.filter(state.listings.visibilityFilter),
    categories: state.categories.categories,
    currentCategory: state.categories.currentCategory,
    user: state.auth.user
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onFetch: () => {
      dispatch(actions.fetch())
    },
    onReceive: (listings) => {
      dispatch(actions.receive(listings))
    },
    onFail: () => {
      dispatch(actions.fail())
    },
    onSelectCategory: (category) => {
      dispatch(select(category))
    }
  }
};

const VisibleListings = connect(
  mapStateToProps, mapDispatchToProps)(Listings);

export default VisibleListings;
