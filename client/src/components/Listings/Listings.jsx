import React from 'react';

import ListingsTable from './ListingsTable.jsx';
import ListingPageNavigation from './ListingPageNavigation.jsx';
import Utils from '../../utils/Utils.jsx';
import MapComponent from '../Maps/GoogleMap.jsx';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {backgroundColor: 'transparent'},
      isListingHovered: null,
      category: 'CategoryName',
      showModal: false,
      newListing: {
        name: '',
        description: '',
        location: '',
        time: '',
        reputation: '',
        price: '',
        terms: '',
        lat: '',
        lng: '',
        hovered: false
      },
      categories: ['whatever', 'hello', 'thisWorks', 'tests\'n\'stuff'],
      listings: [{'id': 0}],
      defaultCenter: {lat: 37.6547, lng: -122.4194}
    }
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    Utils.ajaxJSON('/listings', 'GET')
    .done(data => this.setState({listings: data}))
    .done(() => this.resetNewListing())
    .fail(e => console.log('get request failed, error is', e));
  }

  
  addListing(newListing) {
    var updatedListings = this.state.listings;
    updatedListings.push(JSON.parse(JSON.stringify(newListing)));
    this.state.listings = updatedListings;
  }

  changeCategory(e) {
    var value = e.target.value;
    this.setState({category: value});
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  handleChange(e) {
    this.state.newListing[e.target.name] = e.target.value;
  }

  resetNewListing() {
    for (var key in this.state.newListing) {
      this.state.newListing[key] = '';
    }
  }

  clearTableContents() {
    Utils.ajaxJSON('/clearData', 'GET')
    .done(data => this.setState({listings: data}))
    .fail(e => console.log('get request failed, error is', e));
  }

  onMapPinEnter(index, listing) {
    this.setState({isListingHovered: listing.listing});
  }

  onMapPinLeave(index, listing) {
    this.setState({isListingHovered: null});
  }

  onListingEnter(e) {
    this.setState({isListingHovered: this.state.listings[e.target.id]});
  }

  onListingLeave(index, listing) {
    this.setState({isListingHovered: null});
  }

  render() {
    return (
      <div className="flexbox">

        <div className="listingColumn flexbox flexbox-column" id="listingTable">
          <h3 className="flexbox categoryName">
            {this.state.category}
          </h3>

          <ListingPageNavigation 
            categories={this.state.categories} 
            newListing={this.state.newListing} 
            showModal={this.state.showModal}
            changeCategory={this.changeCategory.bind(this)} 
            toggleModal={this.toggleModal.bind(this)}
            handleChange={this.handleChange.bind(this)}
            resetNewListing={this.resetNewListing.bind(this)}
            getListings={this.getListings.bind(this)}
            addListing={this.addListing.bind(this)}
          />

          <ListingsTable listings={this.state.listings} 
            onListingEnter={this.onListingEnter.bind(this)}
            onListingLeave={this.onListingLeave.bind(this)}
            isListingHovered={this.state.isListingHovered}
            bgStyle={this.state.color}
          />
        </div>

        <div className="mapContainer flexbox flexbox-column">
          <MapComponent 
            listings={this.state.listings}
            defaultCenter={this.state.defaultCenter}
            onMapPinEnter={this.onMapPinEnter.bind(this)}
            onMapPinLeave={this.onMapPinLeave.bind(this)}
            isListingHovered={this.state.isListingHovered}
          />
        </div>

      </div>
    )
  }
}
