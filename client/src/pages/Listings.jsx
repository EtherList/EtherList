import React from 'react';
import ListingsTable from './components/ListingsTable.jsx';
import ListingPageNavigation from './components/ListingPageNavigation.jsx';
import Utils from '../utils/Utils.jsx';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'CategoryName',
      show: false,
      newListing: {
        id: '',
        name: '',
        description: '',
        location: '',
        time: '',
        reputation: '',
        price: '',
        terms: '' 
      },
      categories: ['whatever', 'hello', 'thisWorks', 'tests\'n\'stuff'],
      listings: [{'id': 0}]
    }
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    Utils.ajaxJSON('/listings', 'GET')
    .done(data => this.setState({listings: data}))
    .fail(e => console.log('get request failed, error is', e));
  }

  
  addListing(newListing) {
    this.state.listings.push(newListing);
  }

  changeCategory(e) {
    var value = e.target.value;
    this.setState({category: value});
  }

  toggleModal() {
    this.setState({show: !this.state.show});
  }

  handleChange(e) {
    //The date-picker input field returns a string for e
    //special handling for this case will be necessary
    var setStateObj = this.state.newListing;
    setStateObj[e.target.name] = e.target.value;
  }

  resetNewListing() {
    for (var key in this.state.newListing) {
      this.state.newListing[key] = '';
    }
  }

  render() {
    return (
      <div className="col-xs-12">
        <h3 className="text-center row">
          {'Search listings for ' + this.state.category}
        </h3>

        <ListingPageNavigation 
          categories={this.state.categories} 
          newListing={this.state.newListing} 
          show={this.state.show}
          changeCategory={this.changeCategory.bind(this)} 
          toggleModal={this.toggleModal.bind(this)}
          handleChange={this.handleChange.bind(this)}
          resetNewListing={this.resetNewListing.bind(this)}
          addListing={this.addListing.bind(this)}
        />

        <ListingsTable listings={this.state.listings} />
      </div>
    )
  }
}
