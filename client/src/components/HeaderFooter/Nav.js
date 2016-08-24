import { connect } from 'react-redux';
import * as actions from '../../redux/reducers/auth';
import Nav from './Nav.jsx';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    message: state.auth.message
  };
};

const SmartNav = connect(mapStateToProps)(Nav);

export default SmartNav;
