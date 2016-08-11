import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Listing from './Listing.jsx';

export default class ListingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleModal() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {

    return (
      <div>
      <Button onClick={this.toggleModal.bind(this)}>See the modal
      </Button>
      <Modal className='modal-container' id='ListingModal' show={this.state.show} onHide={this.toggleModal.bind(this)}>
      <Modal.Header closeButton>
      <Modal.Title>
      {this.props.name}
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
      <Listing />
      </div>
      <div>
      <Button className="btn btn-success" onClick={this.toggleModal.bind(this)}>
      Sign the contract
      </Button>
      <Button className="btn btn-danger" onClick={this.toggleModal.bind(this)}>
      Cancel
      </Button>
      </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
      </Modal>
      </div>
      );
  }
  
};

