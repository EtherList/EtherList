import React from 'react';
import Category from './Category.jsx';
import { screenWidth, screenHeight, outerDivStyle, fakeCategories, pageStyle } from '../../utils/customStyle.js';
import {generateCoords} from '../../utils/helpers.js';
import { Link } from 'react-router';


export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: [],
          coordinates: []
        }

    }

    componentWillMount() {
      fetch('/categories').then((response) => {
      if(response.status !== 200) {
        //TODO: re-route unauthenticated users
        this.setState({
          categories: fakeCategories,
          coordinates: generateCoords(20, screenWidth, screenHeight)
        });
      }
      return response.json().then((data) => {
        this.setState({
          categories: data,
          coordinates: generateCoords(data.length + 1, screenWidth, screenHeight)
        });
      });
    }).catch((err) => {
      console.error(err);
    });    
    }

    render() {
        return (
          <div id="dashboard" style={pageStyle}>
              <svg style={outerDivStyle}>
                {this.state.categories.map((category) => {
                  return (
                    <Link to='/listings' key={category.id}>
                    <Category key={category.id} id={category.id} name={category.name} 
                      totalPosts={category.totalPosts} cx={this.state.coordinates[category.id].x} 
                      cy={this.state.coordinates[category.id].y}>
                    </Category>
                    </Link>
                    );
                })}
              </svg>
          </div>
        );
    }
}
