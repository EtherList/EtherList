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
          coordinates: generateCoords(20, screenWidth, screenHeight)
        }

    }

    componentWillMount() {
      fetch('/categories').then((response) => {
      if(response.status !== 200) {
        //TODO: re-route unauthenticated users
        this.setState({
          categories: fakeCategories
        });
      }
      return response.json().then((data) => {
        console.log(data);
        this.setState({
          categories: data
        });
      });
    }).catch((err) => {
      console.error(err);
    });    
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
