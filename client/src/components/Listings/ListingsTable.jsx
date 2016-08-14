import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import ListingModal from '../Modals/ListingModal.jsx';

export default class ListingTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var onHover = this.props.isListingHovered;
    var onListingEnter = this.props.onListingEnter;
    var onListingLeave = this.props.onListingLeave;

    return ( 

      <div className="flexbox">
        <div className="flexbox">
          <div className="flex-container">
            <div className="flex-item">Name</div>
            <div className="flex-item">Description</div>
            <div className="flex-item">Time</div>
            <div className="flex-item">Reputation</div>
            <div className="flex-item">Price</div>
          </div>
        </div>
        <div className="scroll">
          { 
            this.props.listings.map(function(listing, index) {

              var myStyle;
              if (onHover === listing) {
                var myStyle = {
                  backgroundColor: '#2c3e50', 
                  color: 'white', 
                  WebkitTransition: 'width 0.5s, height 0.5s, background-color 0.5s, -webkit-transform 0.5s',
                  transition: 'width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s'
                };
              }

              return <div className="flex-container" key={index} id={index} style={myStyle} onMouseOver={onListingEnter} onMouseLeave={onListingLeave}>
                <div className="flex-item" id={index} >{'Item: ' + listing.name}</div>
                <div className="flex-item" id={index} >{'Description: ' + listing.description}</div>
                <div className="flex-item" id={index} >{'Time: ' + listing.time}</div>
                <div className="flex-item" id={index} >{'Reputation: ' + listing.reputation}</div>
                <div className="flex-item" id={index} >{'Price: ' + listing.price}</div>
              </div>;
            })
          }
        </div>
      </div>
    );
  }
}
