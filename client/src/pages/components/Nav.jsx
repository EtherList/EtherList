import React from 'react';
import { Link } from 'react-router';
import { navbarMargin } from '../styles/customStyle.js';

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
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/">Categories</Link></li>
              <li><Link to="/listings">Listings</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login">Sign Out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
