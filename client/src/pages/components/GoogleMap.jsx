import React from 'react';
import GoogleMap from 'google-map-react';
import MapPin from './MapPin.jsx';

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
    return (
      <GoogleMap
        bootstrapURLKeys={{ 
          key: process.env.GOOGLEMAPSAPI,
          libraries: 'places'
        }}
        center={this.state.center}
        zoom={this.state.zoom}
      >
        {this.props.listings.map((listing) => {
          return (
            <MapPin
              lat={listing.lat}
              lng={listing.lng}
              key={listing.id}
              text={listing.price}
            />
          )
        })}
      </GoogleMap>
    )
  }
}
