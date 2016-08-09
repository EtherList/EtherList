import React from 'react';
import Category from './Category.jsx';
import { screenWidth, screenHeight, outerDivStyle, fakeCoords, fakeCategories } from '../styles/categoryStyle.js';
import {generateCoords} from './helpers.js';
import { Link } from 'react-router';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: fakeCategories,
          coordinates: generateCoords(20, screenWidth, screenHeight)
        }


    }
    render() {
        return (
          <Link to='/listings'>
          <svg style={outerDivStyle}>
          {this.state.categories.map((category) => {
            return (
              <Category key={category.id} id={category.id} name={category.name} totalPosts={category.totalPosts} cx={this.state.coordinates[category.id].x} cy={this.state.coordinates[category.id].y}></Category>
              );
          })}
          </svg>
          </Link>
        );
    }
}


