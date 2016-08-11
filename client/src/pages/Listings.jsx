import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import ListingsTable from './components/ListingsTable.jsx';
import ListingPageNavigation from './components/ListingPageNavigation.jsx';
import Utils from '../utils/Utils.jsx';
import MapComponent from './components/GoogleMap.jsx';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      category: 'CategoryName',
      showModal: false,
      newListing: {
        id: '',
        name: '',
        description: '',
        location: '',
        time: '',
        reputation: '',
        price: '',
        terms: '',
        lat: '',
        lng: ''
      },
      idTracker: '',
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
    .done(data => this.setState({idTracker: data[data.length - 1]['id']}))
    .done(() => this.resetNewListing())
    .fail(e => console.log('get request failed, error is', e));
  }

  
  addListing(newListing) {
    var updatedListings = this.state.listings;
    updatedListings.push(JSON.parse(JSON.stringify(newListing)));
    this.state.listings = updatedListings;
    setTimeout(function() { console.log('listings is', this.state.listings) }.bind(this), 2000);
    setTimeout(function() { console.log('idTracker is', this.state.idTracker) }.bind(this), 2000);
    setTimeout(function() { console.log('newListing is', this.state.newListing) }.bind(this), 2000);
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
    this.state.idTracker++;
    for (var key in this.state.newListing) {
      if (key === 'id') {
        this.state.newListing[key] = this.state.idTracker;
      } else {
        this.state.newListing[key] = '';
      }
    }
  }

  clearTableContents() {
    Utils.ajaxJSON('/clearData', 'GET')
    .done(data => this.setState({listings: data}))
    .fail(e => console.log('get request failed, error is', e));
  }

  render() {
    return (
      <div className="flex-container">

        <div className="flex-column flex1" id="listingTable">
          <button onClick={this.clearTableContents} className="btn btn-small btn-danger">Delete Table Contents</button>
          <h3 className="text-center row">
            {'Search listings for ' + this.state.category}
          </h3>
          <ListingPageNavigation 
            categories={this.state.categories} 
            newListing={this.state.newListing} 
            showModal={this.state.showModal}
            changeCategory={this.changeCategory.bind(this)} 
            toggleModal={this.toggleModal.bind(this)}
            handleChange={this.handleChange.bind(this)}
            resetNewListing={this.resetNewListing.bind(this)}
            addListing={this.addListing.bind(this)}
          />
          <ListingsTable listings={this.state.listings} />
        </div>

        <div id="mapContainer" className="flex-column flex1">
          <MapComponent 
            listings={this.state.listings}
            defaultCenter={this.state.defaultCenter}
          />
        </div>

      </div>
    )
  }
}
