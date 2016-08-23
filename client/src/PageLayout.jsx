import React from 'react';
import Nav from './components/HeaderFooter/Nav.jsx';
import Foot from './components/HeaderFooter/Foot.jsx';
import PrivateProfile from './components/Profile/PrivateProfile.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


export default class PageLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexbox">
        <Nav />
        <div>
          <Link to="/profile/1">one</Link>
          <Link to="/profile/2">two</Link>
        </div>

        <div className="flexbox">
          {this.props.children}
        </div>
        <Foot />
      </div>
    );
  }
}
