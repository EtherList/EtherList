import React from 'react';
import { screenWidth, screenHeight, colors, CategoryHoverStyle, categoryStyle, outerDivStyle } from '../styles/categoryStyle.js';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //keep track number of posts in this category to calculate cicrle diameter,
      //can be swapped for popularuty index or whatever
      posts: 1,
      size: 100,
      color: colors[this.props.name]
    };

  }

  categoryOnHover() {
    //implement on hover behavior
  }

  calculateDiameter(numPosts) {
    //implement custom size, primitive for now
    return this.state.size + numPosts;
  }

  calculatePosition(num) {
    return Math.random() * num;
  }

  categoryOnClick(name) {
    //connect to the next page later
    console.log(name);
  }

  render() {
    return (
      <svg height='150' width='150'x={this.calculatePosition(screenWidth)} y={this.calculatePosition(screenHeight)}>
      <g>
      <circle position='absolute' cx={this.props.cx} cy={this.props.cy} r={this.state.size / 2} fill={this.state.color} fillOpacity='0.5' className={this.props.name} style={categoryStyle} onClick={() => {this.categoryOnClick(this.props.name)}}></circle>
      <text position='absolute' fill='black' x={this.props.cx/2.5} y={this.props.cy} onClick={() => {this.categoryOnClick(this.props.name)}>{this.props.name}</text>
      </g>
      </svg>
      );
  }
}
