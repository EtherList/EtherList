import React from 'react';

export default class ListingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    var myStyle;
    if (this.props.hovered === this.props.listing) {
      var myStyle = {
        backgroundColor: '#2c3e50', 
        color: 'white', 
        WebkitTransition: 'width 0.5s, height 0.5s, background-color 0.5s, -webkit-transform 0.5s',
        transition: 'width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s'
      };
    }

    return (
      <div id={this.props.index} className="flex-container listingItem" key={this.props.index} style={myStyle} 
        onMouseOver={this.props.onListingEnter} onMouseLeave={this.props.onListingLeave} onClick={this.props.onListingClick}>
        <div className="flex-item" id={this.props.index} >{'Item: ' + this.props.listing.name}</div>
        <div className="flex-item" id={this.props.index} >{'Description: ' + this.props.listing.description}</div>
        <div className="flex-item" id={this.props.index} >{'Time: ' + this.props.listing.time}</div>
        <div className="flex-item" id={this.props.index} >{'Reputation: ' + this.props.listing.reputation}</div>
        <div className="flex-item" id={this.props.index} >{'Price: ' + this.props.listing.price}</div>
      </div>
    )
  } 
}