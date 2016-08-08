import React from 'react';
import {Link} from 'react-router';

export default class ListingTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
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
              return <tr key={listing.key}>
                <td>{listing.name}</td>
                <td>{listing.description}</td>
                <td>{listing.time}</td>
                <td>{listing.reputation}</td>
                <td>{listing.price}</td>
                <td>{listing.location}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
