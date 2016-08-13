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

      // <ListingModal showModal={this.state.showModal} toggleModal={this.toggleModal.bind(this)}/>
/*
<table className="table table-striped table-hover">
  <thead>
    <tr>
      <th className="text-center">Name</th>
      <th className="text-center">Description</th>
      <th className="text-center">Time</th>
      <th className="text-center">Reputation</th>
      <th className="text-center">Price</th>
      <th className="text-center">Location</th>
      <th className="text-center">View</th>
    </tr>
  </thead>
  <tbody>{
    this.props.listings.map(function(listing) {
      return <tr key={listing.id}>
        <td>{listing.name}</td>
        <td>{listing.description}</td>
        <td>{listing.time}</td>
        <td>{listing.reputation}</td>
        <td>{listing.price}</td>
        <td>{listing.location}</td>
        <td><Button onClick={() => {this.listingOnClick()}}>take a look</Button></td>
      </tr>;
    })}
  </tbody>
</table>
*/
