import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Utils from './utils/RouteHelpers.jsx';
import Dashboard from './pages/Dashboard.jsx';
import {Router, Route, browserHistory, IndexRoute, replace} from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login} />
      <Route path="login" component={Login} />
      <Route path="signup" component={SignUp} />
      <Route path="home" component={Dashboard} onEnter={Utils.requireAuth} />
    </Route>
  </Router>
), document.getElementById('app'));
