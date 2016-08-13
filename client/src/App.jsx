import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';
import Login from './components/LoginSignup/Login.jsx';
import Utils from './utils/Utils.jsx';
import Categories from './components/Categories/Categories.jsx';
import Listings from './components/Listings/Listings.jsx';
import {Router, Route, browserHistory, IndexRoute, replace} from 'react-router';
import UserProfile from './components/UserProfile/UserProfile.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Categories} />
      <Route path="/" component={Categories} />
      <Route path="auth/facebook" component={Login} />
      <Route path="listings" component={Listings} onEnter={Utils.requireAuth} />
      <Route path="profile" component={UserProfile} />
    </Route>
  </Router>
), document.getElementById('app'));
