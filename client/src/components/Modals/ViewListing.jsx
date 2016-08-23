import React from 'react';

export default class ViewListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var listing = this.props.clickedListing;

    return (
      <div className="form-group">
        <h6>Name:</h6>
        <h4 name="name">{listing.name}</h4>

        <h6>Description:</h6>
        <h4 name="name">{listing.description}</h4>

        <h6>Time:</h6>
        <h4 name="name">{listing.time}</h4>

        <h6>Location:</h6>
        <h4 name="name">{listing.location}</h4>

        <h6>Reputation:</h6>
        <h4 name="name">{listing.reputation}</h4>

        <h6>Price:</h6>
        <h4 name="name">{listing.price}</h4>

        <h6>Terms:</h6>
        <h4 name="name">{listing.terms}</h4>

        <h6>Contact Seller:</h6>
        <textarea placeholder="Type a message to the Seller..." rows="3" cols="50" onChange={this.props.handleTermsChange}></textarea>
     </div>
    )
  }
}

// <div className="panel panel-primary">
//   <div className="panel-heading">Name</div>
//   <div className="panel-body">{listing.name}</div>
// </div>

// <div className="panel panel-primary">
//   <div className="panel-heading">Description</div>
//   <div className="panel-body">{listing.description}</div>
// </div>

// <div className="panel panel-primary">
//   <div className="panel-heading">Time</div>
//   <div className="panel-body">{listing.time}</div>
// </div>

// <div className="panel panel-primary">
//   <div className="panel-heading">Location</div>
//   <div className="panel-body">{listing.location}</div>
// </div>

// <div className="panel panel-primary">
//   <div className="panel-heading">Reputation</div>
//   <div className="panel-body">{listing.reputation}</div>
// </div>

// <div className="panel panel-primary">
//   <div className="panel-heading">Price</div>
//   <div className="panel-body">{listing.price}</div>
// </div>

// <div className="panel panel-primary">
//   <div className="panel-heading">Terms</div>
//   <div className="panel-body">{listing.terms}</div>
// </div>

