import React from 'react';
import GoogleMap from 'google-map-react';
import MapPin from './MapPin.jsx';
import apiKeys from '../../../../keyStorage.js';

export default class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      center: {lat: 37.5047, lng: -122.4194},
      zoom: 9,
      greatPlaceCoords: {lat: 37.5047, lng: -122.4194},
      mapPins: {0: null},
      mapPinsArray: [],
      clusterMax: {cluster: {0: null}}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.clearClusters();
      this.updateClusters();
      this.groupMapPins();
    }, 2000);
  }

  clearClusters() {
    var newMapPins = {};

    this.props.listings.forEach((listing, index) => {
      //TODO: replace 0 with zoom level
      listing['cluster'] = {};
      newMapPins[listing['id']] = listing;
    })

    this.setState({mapPins: newMapPins});
  }

  updateClusters() {
    // console.log('mapPins from inside updateClusters starts off as', this.state.mapPins);
    var listings = this.state.mapPins;
    var anyClusters = false;
    // console.log('listings from updateClusters is', listings);
    for (var key1 in listings) {
      for (var key2 in listings) {
    // for (var i = 1; i < Object.keys(listings).length; i++) {
      // for (var j = i + 1; j <= Object.keys(listings).length; j++) {
        var distance = Math.sqrt(
          Math.pow(listings[key1].lat - listings[key2].lat, 2) + 
          Math.pow(listings[key1].lng - listings[key2].lng, 2)
        );
        // console.log('distance is', distance);
        //TODO: replace '1' with a pixel size or a dynamically calculated distance based on zoom level
        if (distance < 0.1 && key1 !== key2) { 
          // console.log('keys of distance < 0.1 are key1:', key1, 'and key2:', key2);
          anyClusters = true;
          listings[key1]['cluster'][listings[key2]['id']] = listings[key2];
          listings[key2]['cluster'][listings[key1]['id']] = listings[key1];

          var larger = (Object.keys(listings[key1]['cluster']).length > Object.keys(listings[key2]['cluster']).length) ? 
            listings[key1] : 
            listings[key2];

          // console.log('larger is', larger, 'larger length is', Object.keys(larger['cluster']).length);
          // console.log('clusterMax is', this.state.clusterMax, 'clusterMax length is', Object.keys(this.state.clusterMax['cluster']).length);
          if (Object.keys(larger['cluster']).length >= Object.keys(this.state.clusterMax['cluster']).length) {
            this.setState({clusterMax: larger})
          }

        }
      }
    }

    return [anyClusters, larger];
  }

  groupMapPins(i) {
    i = i || 0;
    // console.log('i is', i, 'this.updateClusters returns', this.updateClusters()[0]);
    if (this.updateClusters()[0] && i < 10) {
      console.log('i is', i, 'checking clusterMax', this.state.clusterMax['cluster']);
      for (var key in this.state.clusterMax['cluster']) {
        if (this.state.mapPins[key]) {
          delete this.state.mapPins[key];
        }
      }
      i++;
      this.groupMapPins(i);
    } else {
      setTimeout(() => {console.log('\nthe groupMapPins has been reduced to', this.state.mapPins)}, 2000); 
      var mapPinsArray = [];
      for (var key in this.state.mapPins) {
        mapPinsArray.push(this.state.mapPins[key]);
      }
      this.setState({mapPinsArray: mapPinsArray})
      setTimeout(() => { console.log('mapPinsArray is', mapPinsArray) }, 1000);
    }
  }

  render() {
    
    var onHover = this.props.isListingHovered;
    var listingsInView = this.props.listingsInView;
    var listings = this.props.listings;

    return (
      <GoogleMap
        bootstrapURLKeys={{ 
          key: apiKeys.googleMaps,
          libraries: 'places'
        }}
        center={this.state.center}
        zoom={this.state.zoom}
        onChildMouseEnter={this.props.onMapPinEnter}
        onChildMouseLeave={this.props.onMapPinLeave}
      >
        {this.state.mapPinsArray.map((listing, index) => {
            var isListingInView = false;
            var myStyle = {};

            for (var i = 0; i < listingsInView.length; i++) {
              if (listing === listingsInView[i]) {
                myStyle = {
                  position: 'absolute',
                  width: '45px',
                  height: '45px',
                  left: '-20px',
                  top: '-20px',
                  border: '5px solid #2c3e50',
                  borderRadius: '45px',
                  backgroundColor: '#2c3e50',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  padding: '4px',
                  WebkitTransition: 'width 0.5s, height 0.5s, background-color 0.5s, -webkit-transform 0.5s',
                  transition: 'width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s'
                }
              }
            }

            if (onHover === listing) {
              myStyle = {
                position: 'absolute',
                width: '60px',
                height: '60px',
                left: '-20px',
                top: '-20px',
                border: '5px solid #18bc9c',
                borderRadius: '60px',
                backgroundColor: '#2c3e50',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                padding: '4px',
                WebkitTransition: 'width 0.5s, height 0.5s, background-color 0.5s, -webkit-transform 0.5s',
                transition: 'width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s'
              }
            }

            return (
              <MapPin
                listing={listing}
                lat={listing.lat}
                lng={listing.lng}
                key={index}
                text={listing.price}
                myStyle={myStyle}
              ></MapPin>
            )
          })}
      </GoogleMap>
    )
  }
}
