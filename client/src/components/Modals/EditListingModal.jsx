import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditListingModal = (props) => (
  <Modal show={props.showModal} aria-labelledby="contained-modal-title">

    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Edit Listing</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <div className="form-group">
        <label className="control-label">Name</label>
        <input type="text" className="form-control" name="name" />

        <label className="control-label">Description</label>
        <textarea className="form-control" rows="3" id="comment" name="description"></textarea>

        <label className="control-label">Price</label>
        <input type="text" className="form-control" name="price" />
      </div>
    </Modal.Body>

    <Modal.Footer>
      <Button className="btn btn-success">Submit Changes</Button>
      <Button className="btn btn-danger">Cancel</Button>
    </Modal.Footer>
  </Modal>
);

export default EditListingModal
