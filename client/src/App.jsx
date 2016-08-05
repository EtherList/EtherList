import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login} />
      <Route path="home" component={Dashboard} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'));
