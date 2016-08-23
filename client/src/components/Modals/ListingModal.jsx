import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ViewListing from './ViewListing.jsx';
// import ViewListingModal from '../Modals/ViewListingModal.jsx';
import Utils from '../../utils/Utils.jsx';

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: '',
    }
  }

  expressBuyerInterest() {
    var postObj = {
      listing_id: this.props.clickedListing.id, 
      terms: this.state.terms, 
      listing: this.props.clickedListing
    };
    
    Utils.ajaxJSON('/contracts', 'POST', JSON.stringify(postObj))
    .done(this.props.getListings)
    .done(this.props.toggleModal)
    .fail(e => {
      console.log('post failed, error is', e);
      this.props.toggleModal();
    });
  }

  handleTermsChange(e) {
    this.setState({terms: e.target.value});
  }

  render() {
    return (
      <Modal show={this.props.showViewListingModal} onHide={this.props.toggleModal}
        container={this} aria-labelledby="contained-modal-title"
      >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">View Listing</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          View listing details:
          <ViewListing handleChange={this.props.handleChange} clickedListing={this.props.clickedListing} handleTermsChange={this.handleTermsChange.bind(this)}/>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-success" onClick={this.expressBuyerInterest.bind(this)}>Contact Seller</Button>
          <Button className="btn btn-danger" onClick={this.props.toggleModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
