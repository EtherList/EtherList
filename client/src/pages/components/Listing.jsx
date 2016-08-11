import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { listingPicStyle } from '../styles/customStyle.js';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
      <div>
      <div>
      <img src={this.props.image} style={listingPicStyle}/>
      </div>
      <p>{this.props.reputation}</p>
      <p>name: {this.props.name}</p>
      <p>description: {this.props.description}</p>
      <p>time: {this.props.time}</p>
      <p>price: {this.props.price}</p>
      <p>location: {this.props.location}</p>
      </div>
      </div>

      );
  }
};

