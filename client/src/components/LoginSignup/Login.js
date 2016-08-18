import { connect } from 'react-redux';
import * as actions from '../../redux/reducers/auth';
import LoginButton from './LoginButton.jsx';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    message: state.message
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onLoginAttempt: () => {
      dispatch(actions.loginAttempt())
    },
    onLoginSuccess: (user) => {
      dispatch(actions.loginSuccess(user))
    },
    onLoginFail: (message) => {
      dispatch(actions.loginFail(message))
    },
    onLogout: () => {
      dispatch(actions.logOut())
    }
  }
};

const Login = connect(
  mapStateToProps, mapDispatchToProps)(LoginButton);

export default Login;
