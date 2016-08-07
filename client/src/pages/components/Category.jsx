import React from 'react';
import { colors, CategoryHoverStyle, categoryStyle, outerDivStyle } from '../styles/categoryStyle.js';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //keep track number of posts in this category to calculate cicrle diameter,
      //can be swapped for popularuty index or whatever
      posts: 1,
      size: 50,
      color: colors[this.props.name]
    };

  }

  calculateDiameter(numPosts) {
  console.log(numPosts);
  }

  categoryOnClick(name) {
    console.log(name);
  }

  render() {
    return (
      <svg height='100' width='100'>
      <circle cx={this.props.cx} cy={this.props.cy} r={this.state.size / 2} fill={this.state.color} className={this.props.name} style={categoryStyle} onClick={() => {this.categoryOnClick(this.props.name)}}>{this.props.name} {this.state.size}</circle>
      </svg>
      );
  }
}
