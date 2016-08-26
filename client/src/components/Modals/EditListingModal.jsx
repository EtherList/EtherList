import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class EditListingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interestedBuyers: [],
      clickedItem: this.props.currentListing
    }
  }

  componentDidMount() {
    fetch('/contracts', {credentials: 'same-origin', method: 'get', 
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
    .then((response) => {
      if(response.status !== 200) {
        console.log('err in then');
      } else {
        return response.json()
        .then((info) => {
          console.log('info from fetch is', info);
          this.setState({interestedBuyers: info});
        })
      }
    }).catch((err) => {
      console.error('err in catch is', err);
    });
  }

  render() {
    var interest = this.state.interestedBuyers;
    var context = this;

    return (
      <Modal show={this.props.showModal} onHide={this.props.toggleModal} aria-labelledby="contained-modal-title">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Edit Listing</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-group">
            <label className="control-label">Name</label>
            <input type="text" className="form-control" name="name" value={this.props.selectedListing ? this.props.selectedListing.name : ''} />

            <label className="control-label">Description</label>
            <textarea className="form-control" rows="3" id="comment" name="description" value={this.props.selectedListing ? this.props.selectedListing.description : ''} ></textarea>

            <label className="control-label">Price</label>
            <input type="text" className="form-control" name="price" value={this.props.selectedListing ? this.props.selectedListing.price : ''} />
          </div>
          <div className="flexbox">
            {context.state.interestedBuyers.map(function(contract, index) {
              return <InterestedBuyer key={index} contract={contract} />
            })}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-success">Submit Changes</Button>
          <Button className="btn btn-danger" onClick={this.props.toggleModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export class InterestedBuyer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex-container" style={{height: '50px'}}>
        <div style={{height: '30px', margin: 'auto 0'}}>{'Buyer: ' + this.props.contract.id + '    Reputation: ' + Math.floor(Math.random() * 50) }</div>
        <Button bsSize="xsmall" className="btn btn-success" style={{height: '30px', margin: 'auto 0'}}>Enter Contract</Button>
      </div>
    )
  }
}
