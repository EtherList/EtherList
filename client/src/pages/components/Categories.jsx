import React from 'react';
import Category from './Category.jsx';
import { outerDivStyle } from '../styles/categoryStyle.js';

const calculateDiameter = (numPosts) => {
console.log(numPosts);
}

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: ['achernar',
                            'unperfected',
                            'vascularity',
                            'revote',
                            'campsheeting',
                            'concordantly',
                            'ipiales',
                            'diffident',
                            'nonbending',
                            'centrist',
                            'orangeist',
                            'counteroffensive',
                            'dishevelling',
                            'uncorseted',
                            'depressively',
                            'nondietetic',
                            'lagomorphic']
        }

    }
    render() {
        return (
          <div style={outerDivStyle}>
          {this.state.categories.map((category) => {
            console.log(category);
            return (<Category key={category} name={category}></Category>);
          })}
        </div>
        );
    }
}

