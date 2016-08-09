import React from 'react';
import Category from './Category.jsx';
import { screenWidth, screenHeight, outerDivStyle, coords, fakeCategories } from '../styles/categoryStyle.js';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: fakeCategories,
          coordinates: coords
        }


    }
    render() {
        return (
          <svg style={outerDivStyle}>
          {this.state.categories.map((category) => {
            return (<Category key={category.name} name={category.name} totalPosts={category.totalPosts} cx={this.state.coordinates[category.id].x} cy={this.state.coordinates[category.id].y}></Category>);
          })}
          </svg>
        );
    }
}

