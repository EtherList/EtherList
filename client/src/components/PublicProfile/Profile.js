import { connect } from 'react-redux';
import * as auth.actions from '../../redux/reducers/auth';
import PublicProfile from './PublicProfile.jsx';

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    message: state.user.message
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onLoginAttempt: () => {
      dispatch(auth.actions.loginAttempt())
    },
    onLoginSuccess: (user) => {
      dispatch(auth.actions.loginSuccess(user))
    },
    onLoginFail: () => {
      dispatch(auth.actions.loginFail(message))
    },
    onLogout: () => {
      dispatch(auth.actions.logOut())
    }
  }
};

const Profile = connect(
  mapStateToProps, mapDispatchToProps)(PublicProfile);

export default Profile;
