// Connector
import { connect } from 'react-redux';
import * as ListingsActions from '../../redux/reducers/listings';
import * as ProfileActions from '../../redux/reducers/profile';
import { select } from '../../redux/reducers/categories';
import DumbProfile from './Profile.jsx';

const mapStateToProps = (state) => {
  return {
    listings: state.listings.listings.filter(state.listings.visibilityFilter),
    profile: state.profile.profile
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onFetch: () => {
      dispatch(ListingsActions.fetch())
    },
    onReceive: (listings) => {
      dispatch(ListingsActions.receive(listings))
    },
    onFail: () => {
      dispatch(ListingsActions.fail())
    },
    onSelectCategory: (category) => {
      dispatch(select(category))
    },
    onFilterByUser: (userId) => {
      dispatch(ListingsActions.filter('user', {id: userId}))
    },
    onProfileReceive: (profile) => {
      dispatch(ProfileActions.profileReceive(profile))
    }
  }
};

const Profile = connect(
  mapStateToProps, mapDispatchToProps)(DumbProfile);

export default Profile;
