import React from 'react';
import { DateField } from 'react-date-picker';
import GoogleMap from 'google-map-react';
import MapPin from '../Maps/MapPin.jsx';
import Promise from 'bluebird';
import apiKeys from '../../../../keyStorage.js';


export default class AddListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      center: {lat: 37.5047, lng: -122.4194},
      zoom: 9,
      mapPin: false,
    }
  }

  componentDidMount() {
    var input = document.getElementById("modalMapSearchBox");
    this.autoCompleteBox = new google.maps.places.Autocomplete(input, {geocode: true});
  }

  //TODO: the setTimeout is to allow the autoCompleteBox to update
  //before trying to grab its value. refactor to exclude setTimeout
  updateMap(e) {
    setTimeout(function() {
      var inputPlace = this.autoCompleteBox.getPlace();
      this.props.handleChange({target: {value: inputPlace.name/*formatted_address*/, name: 'location'}})
      var newCenter = {
        lat: inputPlace.geometry.location.lat(),
        lng: inputPlace.geometry.location.lng()
      }
      this.setState({center: newCenter, zoom: 13, mapPin: true});
      var lat = {target: {value: newCenter.lat, name: 'lat'}};
      var lng = {target: {value: newCenter.lng, name: 'lng'}};
      this.props.handleChange(lat);
      this.props.handleChange(lng);
    }.bind(this), 500);
  }

  //Updates map when 'enter' pressed in 'location' input
  handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key === 13) {
      this.updateMap(e);
    }
  }

  render() {
    //Place pin on map only after 1st search performed
    var pin = (!this.state.mapPin) 
      ? null 
      : <MapPin 
          lat={this.state.center.lat} 
          lng={this.state.center.lng} 
          key={1} text={'pin'} 
        />;

    return (
      <div className="form-group">
        <label className="control-label">Name</label>
        <input type="text" className="form-control" placeholder="Name" 
          onChange={this.props.handleChange} name="name" />

        <label className="control-label">Description</label>
        <textarea className="form-control" placeholder="Enter a description of your listing here..." 
          rows="3" id="comment" onChange={this.props.handleChange} name="description"></textarea>

        <label className="control-label">Time</label>
        <DateField className="form-control" dateFormat="YYYY-MM-DD hh:mm a"
          onChange={this.props.handleChange} name="time" />

        <label className="control-label">Price</label>
        <input type="text" className="form-control" placeholder="Price"
          onChange={this.props.handleChange} name="price" />

        <label className="control-label">Terms</label>
        <textarea className="form-control" rows="3" placeholder="Enter a description of your terms here..." 
          id="comment" onChange={this.props.handleChange} name="terms"></textarea>

        <label className="control-label">Location</label>
        <input id="modalMapSearchBox" type="text" className="form-control" placeholder="Location"
          onClick={this.props.handleChange} name="location" onBlur={this.updateMap.bind(this)} 
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        <div id="modalMapContainer">
          <GoogleMap id="modalMap" styles={{height: "250px", width: "250px"}}
            bootstrapURLKeys={{ key: apiKeys.googleMaps }} center={this.state.center} zoom={this.state.zoom}
          >
            {pin}
          </GoogleMap>
        </div>
      </div>
    )
  }
}