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
      mapPins: {lat: 0, lng: 0},
      mapPinsArray: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.clearClusters();
      this.updateClusters();
    }, 750);
  }

  clearClusters() {
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
  }

  updateClusters() {
    var listings = this.state.mapPins;
    var anyClusters = false;

    for (var key1 in listings) {
      for (var key2 in listings) {
        var distance = Math.sqrt(
          Math.pow(listings[key1]['lat'] - listings[key2]['lat'], 2) + 
          Math.pow(listings[key1]['lng'] - listings[key2]['lng'], 2)
        );

        //TODO: replace '1' with a pixel size or a dynamically calculated distance based on zoom level
        if (distance < 0.1 && key1 !== key2) { 
          anyClusters = true;

          listings[key1]['value']++;
          listings[key1]['lat'] = (listings[key1]['lat'] * (listings[key1]['value'] - 1) + listings[key2]['lat']) / listings[key1]['value'];
          listings[key1]['lng'] = (listings[key1]['lng'] * (listings[key1]['value'] - 1) + listings[key2]['lng']) / listings[key1]['value'];

          for (var i = 0; i < listings[key2]['value']; i++) {
            listings[key1]['cluster'].push(listings[key2]['cluster'][i]);
          }

          delete listings[key2];
        }
      }
    }

    var mapPinsArray = [];
    for (var key in listings) {
      mapPinsArray.push(listings[key]);
    }
    this.setState({mapPinsArray: mapPinsArray});
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
              for (var j = 0; j < listing.cluster.length; j++) {
                if (listing.cluster[j] === listingsInView[i]) {
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
            }

            for (var i = 0; i < listing.cluster.length; i++) {
              if (onHover[0] === listing.cluster[i]) {
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
            }

            return (
              <MapPin
                cluster={listing.cluster}
                lat={listing.lat}
                lng={listing.lng}
                key={index}
                myStyle={myStyle}
                text={(listing.value !== 1) ? listing.value : ""}
              />
            )
          })}
      </GoogleMap>
    )
  }
}
