import { connect } from 'react-redux';
import * as listingsActions from '../../redux/reducers/listings';
import SearchComp from './Search.jsx';

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings.filter(state.listings.visibilityFilter)
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onReceive: (listings) => {
      dispatch(listingsActions.receive(listings))
    },
    onFilter: (filterType, filterObject) => {
      dispatch(listingsActions.filter(filterType, filterObject))
    },
    onFail: () => {
      dispatch(listingsActions.fail())
    }
  }
};

const Search = connect(
  mapStateToProps, mapDispatchToProps)(SearchComp);

export default Search;
