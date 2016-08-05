import React from 'react';
import Nav from './components/Nav.jsx';
import Foot from './components/Foot.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />

        <div>
          {this.props.children}
        </div>

        <Foot />
      </div>
    );
  }
}
