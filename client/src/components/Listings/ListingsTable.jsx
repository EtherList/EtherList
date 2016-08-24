import React from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import ListingModal from '../Modals/ListingModal.jsx';
import Listing from './Listing.jsx';

export default class ListingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingsInView: [],
      showViewListingModal: false,
      clickedListing: {}
    }
  }

  componentDidMount() {
    setTimeout(this.showListingsInView.bind(this), 1000);
  }

  showListingsInView() {
    var context = this;
    var areaHeight = $('.scrollableDiv').height();
    var areaTop = $('.scrollableDiv').position().top;
    var areaBottom = areaTop + areaHeight;
    var listingsInView = [];

    $('.listingItem').each(function() {
      var top = $(this).position().top;
      var height = $(this).height();
      var thisListing = context.props.listings[this.id];

      if (top > (areaTop - height * 4/5) && top < (areaBottom - height * 1/5)) {
        listingsInView.push(thisListing);
      }
    });

    context.props.onListingScroll(listingsInView);
  }

  onListingClick(e) {
    this.toggleModal();
    this.setState({clickedListing: this.props.listings[e.target.id]})
  }

  toggleModal() {
    this.setState({showViewListingModal: !this.state.showViewListingModal});
  }

  render() {
    var onHover = this.props.isListingHovered;
    var onListingEnter = this.props.onListingEnter;
    var onListingLeave = this.props.onListingLeave;
    var onListingClick = this.onListingClick.bind(this);

    return ( 

      <div className="flexbox">
        <div className="flexbox" style={{height: 'auto'}}>
          <div className="flex-container" style={{backgroundColor: '#888888'}}>
            <div className="flex-item">Name</div>
            <div className="flex-item">Description</div>
            <div className="flex-item">Time</div>
            <div className="flex-item">Reputation</div>
            <div className="flex-item">Price</div>
          </div>
        </div>
        <div className="scroll scrollableDiv" onScroll={this.showListingsInView.bind(this)} style={{overflowY: 'scroll', zIndex: 2}}>
          {this.props.listings.map(function(listing, index) {
            return <Listing key={index} listing={listing} index={index} hovered={onHover} onListingEnter={onListingEnter}
              onListingLeave={onListingLeave} onListingClick={onListingClick}
            />
          })}
        </div>
        <ListingModal 
          showViewListingModal={this.state.showViewListingModal}
          toggleModal={this.toggleModal.bind(this)} 
          clickedListing={this.state.clickedListing}
        />
      </div>


    );
  }
}
