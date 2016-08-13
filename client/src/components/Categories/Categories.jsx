import React from 'react';
import Category from './Category.jsx';
import { screenWidth, screenHeight, outerDivStyle, fakeCategories, pageStyle } from '../../utils/customStyle.js';
import {generateCoords} from '../../utils/helpers.js';
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
          <div id="dashboard" style={pageStyle}>
            <Link to='/listings'>
              <svg style={outerDivStyle}>
                {this.state.categories.map((category) => {
                  return (
                    <Category key={category.id} id={category.id} name={category.name} 
                      totalPosts={category.totalPosts} cx={this.state.coordinates[category.id].x} 
                      cy={this.state.coordinates[category.id].y}>
                    </Category>
                    );
                })}
              </svg>
            </Link>
          </div>
        );
    }
}
