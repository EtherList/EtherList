import React from 'react';
import { screenWidth, screenHeight, colors, coords, CategoryHoverStyle, categoryStyle, outerDivStyle, baseSize } from '../styles/categoryStyle.js';

var style = categoryStyle;

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //keep track number of posts in this category to calculate cicrle diameter,
      //can be swapped for popularuty index or whatever
      posts: 1,
      color: colors[this.props.name],
      hover: false
    };

  }

  categoryOnHover() {
    //implement on hover behavior
    style = CategoryHoverStyle;
    this.setState({
      hover: true
    });
  }

  categoryNoHover() {
    style = categoryStyle;
    this.setState({
      hover: false
    });
    
  }

  calculateDiameter(numPosts) {
    //implement custom size, primitive for now
    return (baseSize + numPosts) / 3;
  }

  categoryOnClick(name) {
    //connect to the next page later via parent component's state?
    console.log(name);
  }

  render() {
    return (
      <g style={style} height={this.calculateDiameter(this.props.totalPosts) * 1.5} width={this.calculateDiameter(this.props.totalPosts) * 1.5} onClick={() => {this.categoryOnClick(this.props.name)}}>
      <circle cx={this.props.cx} cy={this.props.cy} r={this.calculateDiameter(this.props.totalPosts)} fill={this.state.color} className={this.props.name} onMouseEnter={() => this.categoryOnHover()} onMouseLeave={() => {this.categoryNoHover()}}></circle>
      <text cursor='pointer' fill='black' x={this.props.cx} y={this.props.cy} onMouseEnter={() => this.categoryOnHover()} onMouseLeave={() => {this.categoryNoHover()}}>{this.props.name}</text>
      </g>
      );
  }
}
