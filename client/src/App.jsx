import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, replace } from 'react-router';
import { store } from './redux/store';
import PageLayout from './PageLayout.jsx';
import VisibleCategories from './components/Categories/VisibleCategories.js';
import Login from './components/LoginSignup/Login.js';
import VisibleListings from './components/Listings/VisibleListings';
import PublicProfile from './components/PublicProfile/PublicProfile.jsx';



ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={PageLayout}>
        <IndexRoute component={VisibleCategories} />
        <Route path="/" component={VisibleCategories} />
        <Route path="auth/facebook" component={Login} />
        <Route path="listings" component={VisibleListings} />
        <Route path="profile" component={PublicProfile} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
