import React from 'react';
import { Link } from 'react-router';
import Login from '../LoginSignup/Login.js';
import { navbarMargin } from '../../utils/customStyle.js';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default" style={navbarMargin}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">EtherList</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Login /></li>
              <li><Link to="/">Categories</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/logout">Sign Out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
