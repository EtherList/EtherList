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
      listings: this.props.listings,
      mapPinsArray: this.props.mapPinsArray
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.updateClusters();
    }, 1000);
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
        {this.props.mapPinsArray.map((listing, index) => {
            var isListingInView = false;
            var myStyle = {};
            for (var i = 0; i < listingsInView.length; i++) {
              for (var j = 0; j < listing.cluster.length; j++) {
                if (listing.cluster[j]['id'] === listingsInView[i]['id']) {
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
