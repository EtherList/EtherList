import React from 'react';
import Category from './Category.jsx';
import { screenWidth, screenHeight, fakeCategories, pageStyle, outerDivStyle } from '../../utils/customStyle.js';
import { generateCoords } from '../../utils/helpers.js';
import { Link } from 'react-router';
import Search from '../Search/Search';


export default class Categories extends React.Component {
    constructor(props) {
        super(props);
    }

    fetchCategories() {
      this.props.onFetch();
      fetch('/categories').then((response) => {
        if(response.status !== 200) {
          //TODO: handle error
          alert('this dev team has no idea how to handle errors');
        }
        return response.json().then((categories) => {
          this.props.onReceive(categories, generateCoords(categories.length + 1, screenWidth, screenHeight));
        });
      }).catch((err) => {
        console.error(err);
      });
    }

    handleWindowResize() {
      //   //TODO: fix the grabbed size (too big)
      let width = document.getElementById('dashboard').getBoundingClientRect().width - 200;
      let height = document.getElementById('dashboard').getBoundingClientRect().height - 100;
      this.props.onReceive(this.props.categories, generateCoords(this.props.categories.length + 1, width, height));
    }

    componentDidMount() {
      this.props.onSelect({});
      this.fetchCategories();
      window.addEventListener('resize', this.handleWindowResize.bind(this), false);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowResize.bind(this), false);
    }

    render() {
      //TODO: fix outerDivStyle and pageStyle to allow dynamic resizing
        return (
          <div id="dashboard" style={pageStyle}>
            <div className="col-xs-offset-5">
              <Search onSearch={this.props.onClearFilter} />
            </div>
              <svg style={outerDivStyle}>
                {this.props.categories.map((category) => {
                  return (
                    <Link to='/listings' key={category.id} onClick={() => {this.props.onSelect(category)}}>
                    <Category key={category.id} id={category.id} name={category.name} 
                      numPosts={category.numPosts} cx={this.props.coordinates[category.id].x} 
                      cy={this.props.coordinates[category.id].y}>
                    </Category>
                    </Link>
                    );
                })}
              </svg>
          </div>
        );
    }
}
