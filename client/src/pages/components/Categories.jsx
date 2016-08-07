import React from 'react';
import Category from './Category.jsx';
import { outerDivStyle, screenWidth, screenHeight } from '../styles/categoryStyle.js';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: ['achernar',
                      'unperfected',
                      'vascularity',
                      'campsheeting',
                      'concordantly',
                      'nonbending',
                      'orangeist',
                      'counteroffensive']
        }

    }
    render() {
        return (
          <div style={outerDivStyle}>
          {this.state.categories.map((category) => {
            var cx = Math.floor(Math.random() * (screenWidth) + )
            return (<Category key={category} name={category} cx={cx} cy={cy}></Category>);
          })}
        </div>
        );
    }
}

