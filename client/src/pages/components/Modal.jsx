import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddListingForm from './AddListingForm.jsx';
import $ from 'jquery';

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  postData() {
    var theListing = this.props.addListing;
    var that = this.props;
    $.ajax({
      method: "POST",
      url: 'http://localhost/newListing',
      data: JSON.stringify(theListing),
      contentType: "application/json",
      dataType: 'json'
    })
    .done(function(data){
      console.log('Successfully posted', data);
      that.resetAddListing();
      that.closeModal();
    })
    .fail(function(e){
      console.log('post failed, error is', e);
    });
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModal}
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
            addListing={this.props.addListing}
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
            onClick={this.props.closeModal}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
