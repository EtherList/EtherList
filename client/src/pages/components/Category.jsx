import React from 'react';
import { CategoryHoverStyle, categoryStyle, outerDivStyle } from '../styles/categoryStyle.js';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 300,
      color: 'red'
    };
  }

  categoryOnClick(name) {
    console.log(name);
  }

  render() {
    return (
      <div style={categoryStyle} onClick={() => {this.categoryOnClick(this.props.name)}}>{this.props.name}</div>
      );
  }
}
