import React from 'react';
import { screenWidth, screenHeight, colors, CategoryHoverStyle, categoryStyle, outerDivStyle, baseSize } from '../styles/customStyle.js';

var style = categoryStyle;

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //keep track number of posts in this category to calculate cicrle diameter,
      //can be swapped for popularuty index or whatever
      totalPosts: this.props.totalPosts,
      color: colors[this.props.id - 1],
      hover: false,
      radius: (baseSize + this.props.totalPosts) / 3
    };

  }

  categoryOnHover() {
    //implement on hover behavior: float forward, change opacity, grow in size
    style = CategoryHoverStyle;
    this.setState({
      hover: true
    });
    if (this.state.radius <= ((baseSize + this.props.totalPosts) / 3)) {
      this.setState({
        radius: this.state.radius * 1.5
      });
    }
  }

  categoryNoHover() {
    style = categoryStyle;
    if (this.state.radius > ((baseSize + this.props.totalPosts) / 3)) {
      this.setState({
        hover: false,
        radius: this.state.radius / 1.5
      });
    }
    
  }

  calculateRadius(num) {
    return (baseSize + this.props.totalPosts) / 3;
  }


  categoryOnClick(name) {
    //connect to the next page later via parent component's state?
    console.log(name);
  }

  render() {

    return (
      <g style={style} height={this.calculateRadius(this.props.totalPosts) * 1.5} width={this.calculateRadius(this.props.totalPosts) * 1.5} onClick={() => {this.categoryOnClick(this.props.name)}} onMouseEnter={() => this.categoryOnHover()} onMouseLeave={() => {this.categoryNoHover()}}>

      <radialGradient id='radialGradient'>
        <stop offset="80%" stopColor={this.state.color}/>
        <stop offset="100%" stopColor="white"/>
      </radialGradient>

      <circle cx={this.props.cx} cy={this.props.cy} r={this.state.radius} fill={this.state.color} className={this.props.name} cursor='default'></circle>
      <text cursor='default' fill='black' x={this.props.cx} y={this.props.cy} >{this.props.name}</text>
      </g>
      );
  }

}
