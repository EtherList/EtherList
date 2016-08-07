import React from 'react';
import Categories from './components/Categories.jsx';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='dashboard'>
      <Categories />
      </div>
    );
  }
}
