import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddListingForm from './AddListingForm.jsx';
import { ajaxJSON } from '../../utils/utils.js';

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  postData() {
    var newListing = JSON.parse(JSON.stringify(this.props.newListing));
    newListing['categoryId'] = this.props.currentCategory['id'];
    newListing['userId'] = this.props.userId['id'];

    ajaxJSON('/listings', 'POST', JSON.stringify(newListing))
    .done(this.props.getListings)
    .done(this.props.toggleModal)
    .fail(e => console.log('post failed, error is', e));
  }

  render() {
    return (
      <Modal
        show={this.props.showAddListingModal}
        onEnter={this.toggleMapHeight}
        onHide={this.props.toggleModal}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Add Listing
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Add your listing here:
          <AddListingForm handleChange={this.props.handleChange} 
            newListing={this.props.newListing}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button 
            className="btn btn-success" 
            onClick={this.postData.bind(this)}
          >
            Add Listing
          </Button>
          
          <Button 
            className="btn btn-danger" 
            onClick={this.props.toggleModal}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
