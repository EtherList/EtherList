import React from 'react';
import Categories from './components/Categories.jsx';
import { pageStyle } from './styles/categoryStyle.js';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='dashboard' style={pageStyle}>
      <Categories />
      </div>
    );
  }
}
