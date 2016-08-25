import React from 'react';
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
    var listingItems = document.getElementsByClassName('listingItem');

    var scrollViewHeight = document.getElementById('scrollDiv').offsetHeight;
    var scrollViewTop = document.getElementById('scrollDiv').getBoundingClientRect().top;
    var scrollViewBottom = scrollViewTop + scrollViewHeight;
    var listingsInView = [];

    for (var i = 0; i < listingItems.length; i++) {
      var height = document.getElementById(listingItems[i].id).offsetHeight;
      var top = document.getElementById(listingItems[i].id).getBoundingClientRect().top;
      var thisListing = context.props.listings[listingItems[i].id];

      if (top > (scrollViewTop - height * 4/5) && top < (scrollViewBottom - height * 1/5)) {
        listingsInView.push(thisListing);
      }
    };

    context.props.onListingScroll(listingsInView);
  }

  onListingClick(e) {
    this.toggleModal();

    var clickedListing;
    if (e.target.id) {
      clickedListing = this.props.listings[e.target.id];
    } else {
      clickedListing = this.props.listings[e.target.parentElement.id];
    }

    this.setState({clickedListing: clickedListing})
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
        <div className="scroll scrollableDiv" id="scrollDiv" onScroll={this.showListingsInView.bind(this)} style={{overflowY: 'scroll', zIndex: 2}}>
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
