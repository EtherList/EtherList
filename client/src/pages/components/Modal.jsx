import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddListingForm from './AddListingForm.jsx';

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
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
          <AddListingForm {...this.props}/>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-success" onClick={this.props.closeModal}>Add Listing</Button>
          <Button className="btn btn-danger" onClick={this.props.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}