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
      greatPlaceCoords: {lat: 37.5047, lng: -122.4194}
    }
  }

  render() {
    
    var onHover = this.props.isListingHovered;

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
        {this.props.listings.map((listing, index) => {

          var myStyle = {};
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
            />
          )
        })}
      </GoogleMap>
    )
  }
}
