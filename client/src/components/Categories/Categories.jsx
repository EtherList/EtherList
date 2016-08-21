import React from 'react';
import Category from './Category.jsx';
import { screenWidth, screenHeight, outerDivStyle, fakeCategories, pageStyle } from '../../utils/customStyle.js';
import { generateCoords } from '../../utils/helpers.js';
import { Link } from 'react-router';


export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          coordinates: []
        };
    }

    fetchCategories() {
      this.props.onFetch();
      fetch('/categories').then((response) => {
        if(response.status !== 200) {
          //TODO: handle error
          alert('this dev team has no idea how to handle errors');
        }
        return response.json().then(this.props.onReceive);
      }).catch((err) => {
        console.error(err);
      });
    }

    handleWindowResize() {
        //TODO: fix the grabbed size (too big)
      let width = document.getElementById('dashboard').getBoundingClientRect().width;
      let height = document.getElementById('dashboard').getBoundingClientRect().height;
      console.log(width, height);
      this.setState({
        coordinates: generateCoords(this.props.categories.length + 1, width, height)
      });
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        coordinates: generateCoords(nextProps.categories.length + 1, screenWidth, screenHeight)
      });
    }

    componentDidMount() {
      this.fetchCategories();
      window.addEventListener('resize', this.handleWindowResize.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowResize.bind(this));
    }

    render() {
      //TODO: fix outerDivStyle and pageStyle to allow dynamic resizing
        return (
          <div id="dashboard" style={pageStyle}>
              <svg style={outerDivStyle}>
                {this.props.categories.map((category) => {
                  return (
                    <Link to='/listings' key={category.id} onClick={() => {this.props.onSelect(category)}}>
                    <Category key={category.id} id={category.id} name={category.name} 
                      numPosts={category.numPosts} cx={this.state.coordinates[category.id].x} 
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
