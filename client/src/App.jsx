import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import Utils from './utils/Utils.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Listings from './pages/Listings.jsx';
import {Router, Route, browserHistory, IndexRoute, replace} from 'react-router';
import UserProfile from './pages/components/UserProfile.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Dashboard} />
      <Route path="/" component={Dashboard} />
      <Route path="login" component={Login} />
      <Route path="listings" component={Listings} onEnter={Utils.requireAuth} />
      <Route path="profile" component={UserProfile} />
    </Route>
  </Router>
), document.getElementById('app'));
