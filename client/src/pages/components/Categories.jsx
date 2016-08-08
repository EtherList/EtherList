import React from 'react';
import Category from './Category.jsx';
import { outerDivStyle, screenWidth, screenHeight } from '../styles/categoryStyle.js';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: [{ name: 'achernar', totalPosts: 1},
                      { name: 'unperfected', totalPosts: 1},
                      { name:'vascularity', totalPosts: 1},
                      { name:'campsheeting', totalPosts: 1},
                      { name:'concordantly', totalPosts: 1},
                      { name:'nonbending', totalPosts: 1},
                      { name:'orangeist', totalPosts: 1},
                      { name:'counteroffensive', totalPosts: 1}]
        }

    }
    render() {
        return (
          <div style={outerDivStyle}>
          {this.state.categories.map((category) => {
            return (<Category key={category.name} name={category.name} cx='50' cy='50'></Category>);
          })}
        </div>
        );
    }
}

