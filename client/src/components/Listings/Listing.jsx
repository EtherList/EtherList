import React from 'react';

export default class ListingTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var myStyle;
    for (var i = 0; i < this.props.hovered.length; i++) {
      if (this.props.hovered[i] === this.props.listing) {
        var myStyle = {
          backgroundColor: '#2c3e50', 
          color: 'white', 
          WebkitTransition: 'width 0.5s, height 0.5s, background-color 0.5s, -webkit-transform 0.5s',
          transition: 'width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s'
        };
      }
    }

    return (
      <div className="flex-container listingItem" id={this.props.index} style={myStyle} 
        onMouseOver={this.props.onListingEnter} onMouseLeave={this.props.onListingLeave} onClick={this.props.onListingClick}>
        <div className="flex-item">{'Item: ' + this.props.listing.name}</div>
        <div className="flex-item">{'Description: ' + this.props.listing.description}</div>
        <div className="flex-item">{'Time: ' + this.props.listing.time}</div>
        <div className="flex-item">{'Reputation: ' + this.props.listing.reputation}</div>
        <div className="flex-item">{'Price: ' + this.props.listing.price}</div>
      </div>
    )
  } 
}