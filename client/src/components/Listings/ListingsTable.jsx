import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import ListingModal from '../Modals/ListingModal.jsx';


export default class ListingTable extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   modalShown: false;
    // };
  }

  // listingOnClick() { 
  //   this.setState({
  //     modalShown: true
  //   });
  //   console.log('modal shown');
  // }


  render() {
    // if (this.state.modalShown) {
    //   modal = <ListingModal />;
    // }
    // else {
    //   modal = <p></p>;
    // }
    return ( 
      <div className="flexbox">
        <div className="flexbox">
          <div className="flex-container">
            <div className="flex-item">Name</div>
            <div className="flex-item">Description</div>
            <div className="flex-item">Time</div>
            <div className="flex-item">Reputation</div>
            <div className="flex-item">Price</div>
            <div className="flex-item">View</div>
          </div>
        </div>
        <div className="scroll">
          {
            this.props.listings.map(function(listing) {
              return <div className="flex-container" key={listing.id}>
                <div className="flex-item">{listing.name}</div>
                <div className="flex-item">{listing.description}</div>
                <div className="flex-item">{listing.time}</div>
                <div className="flex-item">{listing.reputation}</div>
                <div className="flex-item">{listing.price}</div>
                <div className="flex-item"><Button onClick={() => {/*this.listingOnClick()*/}}>take a look</Button></div>
              </div>;
            })
          }
        </div>
      </div>
    );
  }
}
