import React from 'react';
import { screenWidth, screenHeight, colors, CategoryHoverStyle, categoryStyle, outerDivStyle, baseSize } from '../../utils/customStyle.js';

var style = categoryStyle;

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      radius: (baseSize + this.props.numPosts) / 3
    };

  }

  categoryOnHover() {
    //implement on hover behavior: float forward, change opacity, grow in size
    style = CategoryHoverStyle;
    this.setState({
      hover: true
    });
    if (this.state.radius <= ((baseSize + this.props.numPosts) / 3)) {
      this.setState({
        radius: this.state.radius * 1.5
      });
    }
  }

  categoryNoHover() {
    style = categoryStyle;
    if (this.state.radius > ((baseSize + this.props.numPosts) / 3)) {
      this.setState({
        hover: false,
        radius: this.state.radius / 1.5
      });
    }
    
  }

  calculateRadius(num) {
    return (baseSize + this.props.numPosts) / 3;
  }


  render() {

    return (
      <g style={style} height={this.calculateRadius(this.props.numPosts) * 1.5} width={this.calculateRadius(this.props.numPosts) * 1.5} onMouseEnter={() => this.categoryOnHover()} onMouseLeave={() => {this.categoryNoHover()}}>

      <radialGradient id='radialGradient'>
        <stop offset="80%" stopColor={this.state.color}/>
        <stop offset="100%" stopColor="white"/>
      </radialGradient>

      <circle cx={this.props.cx} cy={this.props.cy} r={this.state.radius} fill={colors[this.props.id - 1]} className={this.props.name} cursor='default'></circle>
      <text cursor='default' fill='black' x={this.props.cx} y={this.props.cy} >{this.props.name}</text>
      </g>
      );
  }

}
