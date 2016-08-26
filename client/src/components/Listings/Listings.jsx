import React from 'react';
import ListingsTable from './ListingsTable.jsx';
import ListingPageNavigation from './ListingPageNavigation.jsx';
import * as actions from '../../redux/reducers/listings';
import MapComponent from '../Maps/GoogleMap.jsx';
import Search from '../Search/Search';
import { fetchListings } from '../../utils/utils';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {backgroundColor: 'transparent'},
      isListingHovered: [],
      listingsInView: [],
      currentCategory: this.props.currentCategory,
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
        hovered: false,
        clusterCtr: 0,
        userId: ''
      },
      categories: this.props.categories,
      defaultCenter: {lat: 37.6547, lng: -122.4194},
      mapPins: {lat: 0, lng: 0},
      mapPinsArray: [],
      zoom: 9,
      defaultZoom: 9
    }
  }

  updateZoom(newZoom) {
    this.setState({zoom: newZoom});
    this.updateClusters();
  }

  componentDidMount() {
    this.getListings();
  }

  updateClusters() {
    var newMapPins = {};

    this.props.listings.forEach((listing, index) => {
      var newPin = {id: 0, value: 0, lat: 0, lng: 0, cluster: []};

      newPin['id'] = index;
      newPin['value']++;
      newPin['lat'] = (newPin['lat'] + listing['lat']) / newPin['value'];
      newPin['lng'] = (newPin['lng'] + listing['lng']) / newPin['value'];
      newPin['cluster'].push(listing);

      newMapPins[index] = newPin;
    })

    this.setState({mapPins: newMapPins});
    this.groupClusters();
  }

  groupClusters() {
    var mapPins = this.state.mapPins;
    var anyClusters = false;
    var radius = (1 / Math.pow(this.state.zoom, 3)) * 100;


    for (var key1 in mapPins) {
      for (var key2 in mapPins) {
        var distance = Math.sqrt(
          Math.pow(mapPins[key1]['lat'] - mapPins[key2]['lat'], 2) + 
          Math.pow(mapPins[key1]['lng'] - mapPins[key2]['lng'], 2)
        );

        //TODO: replace '1' with a pixel size or a dynamically calculated distance based on zoom level
        if (distance < radius && key1 !== key2) { 
          anyClusters = true;

          mapPins[key1]['value']++;
          mapPins[key1]['lat'] = (mapPins[key1]['lat'] * (mapPins[key1]['value'] - 1) + mapPins[key2]['lat']) / mapPins[key1]['value'];
          mapPins[key1]['lng'] = (mapPins[key1]['lng'] * (mapPins[key1]['value'] - 1) + mapPins[key2]['lng']) / mapPins[key1]['value'];

          for (var i = 0; i < mapPins[key2]['value']; i++) {
            mapPins[key1]['cluster'].push(mapPins[key2]['cluster'][i]);
          }

          delete mapPins[key2];
        }
      }
    }

    var mapPinsArray = [];
    for (var key in mapPins) {
      mapPinsArray.push(mapPins[key]);
    }
    this.setState({mapPinsArray: mapPinsArray});
  }

  showListingsInView() {
    var context = this;
    var listingItems = document.getElementsByClassName('listingItem');

    var scrollViewHeight = document.getElementById('scrollDiv').offsetHeight;
    var scrollViewTop = document.getElementById('scrollDiv').getBoundingClientRect().top;
    var scrollViewBottom = scrollViewTop + scrollViewHeight;
    var listingsInView = [];

    for (var i = 0; i < listingItems.length; i++) {
      var height = document.getElementById(listingItems[i].id).offsetHeight;
      var top = document.getElementById(listingItems[i].id).getBoundingClientRect().top;
      var thisListing = context.props.listings[listingItems[i].id];

      if (top > (scrollViewTop - height * 4/5) && top < (scrollViewBottom - height * 1/5)) {
        listingsInView.push(thisListing);
      }
    };

    context.onListingScroll(listingsInView);
  }

  getListings() {
    this.props.onFetch();
    this.resetNewListing();
  }

  addListing(newListing) {
    var updatedListings = this.state.listings;
    updatedListings.push(JSON.parse(JSON.stringify(newListing)));
    this.state.listings = updatedListings;
  }

  changeCategory(e) {
    var categoryName = e.target.value;
    this.props.onSelectCategory(categoryName);
  }

  handleChange(e) {
    this.state.newListing[e.target.name] = e.target.value;
  }

  resetNewListing() {
    for (var key in this.state.newListing) {
      this.state.newListing[key] = '';
    }
  }

  onMapPinEnter(index, mapPin) {
    this.setState({isListingHovered: mapPin.cluster});
  }

  onMapPinLeave(index, listing) {
    this.setState({isListingHovered: []});
  }

  onListingEnter(e) {
    if (e.target.id) {
      this.setState({isListingHovered: [this.props.listings[e.target.id]]});
    } else {
      this.setState({isListingHovered: [this.props.listings[e.target.parentElement.id]]});
    }
  }

  onListingLeave(index, listing) {
    this.setState({isListingHovered: []});
  }

  onListingScroll(listingsInView) {
    this.setState({listingsInView: listingsInView})
  }

  render() {
    return (
      <div className="flexbox">

        <div className="listingColumn flexbox flexbox-column" id="listingTable">
          <h3 className="flexbox categoryName">
            {this.props.currentCategory.name}
          </h3>

          <ListingPageNavigation 
            currentCategory={this.props.currentCategory} 
            userId={this.props.user}
            newListing={this.state.newListing} 
            changeCategory={this.changeCategory.bind(this)} 
            handleChange={this.handleChange.bind(this)}
            resetNewListing={this.resetNewListing.bind(this)}
            getListings={this.getListings.bind(this)}
            addListing={this.addListing.bind(this)}
            updateClusters={this.updateClusters.bind(this)}
            groupClusters={this.groupClusters.bind(this)}
            showListingsInView={this.showListingsInView.bind(this)}
            listings={this.props.listings}
            mapPins={this.state.mapPins}
          />

          <Search />

          <ListingsTable listings={this.props.listings} 
            userId={this.props.user}
            listingsInView={this.state.listingsInView}
            onListingScroll={this.onListingScroll.bind(this)}
            onListingEnter={this.onListingEnter.bind(this)}
            onListingLeave={this.onListingLeave.bind(this)}
            isListingHovered={this.state.isListingHovered}
            bgStyle={this.state.color}
            showListingsInView={this.showListingsInView.bind(this)}
          />
        </div>

        <div className="mapContainer flexbox flexbox-column">
          <MapComponent 
            mapPins={this.state.mapPins}
            mapPinsArray={this.state.mapPinsArray}
            updateClusters={this.updateClusters.bind(this)}
            groupClusters={this.groupClusters.bind(this)}
            listingsInView={this.state.listingsInView}
            listings={this.props.listings}
            defaultCenter={this.state.defaultCenter}
            onMapPinEnter={this.onMapPinEnter.bind(this)}
            onMapPinLeave={this.onMapPinLeave.bind(this)}
            isListingHovered={this.state.isListingHovered}
            zoom={this.state.zoom}
            defaultZoom={this.state.defaultZoom}
            updateZoom={this.updateZoom.bind(this)}
          />
        </div>

      </div>
    )
  }
}
