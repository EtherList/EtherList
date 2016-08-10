import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleModal() {
    console.log('it works');
  }

  render() {
    return (
      <Modal className='modal-container'>
      <Modal.Header closeButton>
      <Modal.Title>
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Button className="btn btn-success" >
      Sign the contract
      </Button>
      <Button className="btn btn-danger" onClick={this.toggleModal.bind(this)}>
      Cancel
      </Button>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
      </Modal>
      );
  }
};

