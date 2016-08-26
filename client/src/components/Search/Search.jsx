import React from 'react';
import { Button } from 'react-bootstrap';
import { fetchListings } from '../../utils/utils';
import { store } from '../../redux/store';
import { globalSearchStyle } from '../../utils/customStyle.js';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  onChange(event) {
    this.setState({
      keyword: event.target.value
    });
  }

  search(event) {
    event.preventDefault();
    if (this.props.onSearch) {
      this.props.onSearch();
    }
    fetchListings(store, this.state.keyword);
    this.setState({
      keyword: ''
    });
    this.context.router.push({pathname: '/listings', state: {listings: this.props.listings}});
  }


  render() {
    return (
      <div id='search' style={globalSearchStyle}>
      <form onSubmit={this.search.bind(this)}>
      <input type="text" maxLength='100' value={this.state.keyword} onChange={this.onChange.bind(this)}>
      </input>
      <Button bsStyle='primary' bsSize="small" onClick={this.search.bind(this)}>Search</Button>
      </form>
      </div>
      )
  }
};

Search.contextTypes = {
    router: React.PropTypes.func.isRequired
};
