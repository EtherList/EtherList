import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class EditListingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-success">Submit Changes</Button>
          <Button className="btn btn-danger" onClick={this.props.toggleModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
