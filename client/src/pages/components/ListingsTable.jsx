import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';
import ListingModal from './ListingModal.jsx';

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
    // if (/*this.state.modalShown*/) {
    //   modal = <ListingModal />;
    // }
    // else {
    //   modal = <p></p>;
    // }
    return ( 
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Description</th>
              <th className="text-center">Time</th>
              <th className="text-center">Reputation</th>
              <th className="text-center">Price</th>
              <th className="text-center">Location</th>
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
      </div>
    )
  }
}
