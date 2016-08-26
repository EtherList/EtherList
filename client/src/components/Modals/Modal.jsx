import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddListingForm from './AddListingForm.jsx';
import { store } from '../../redux/store';
import { fetchListings } from '../../utils/utils';

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  postData() {
    var newListing = JSON.parse(JSON.stringify(this.props.newListing));
    newListing['categoryId'] = this.props.currentCategory['id'];
    console.log('this.props.user is', this.props.user);
    newListing['userId'] = this.props.userId['id'];

    fetch('/listings', {credentials: 'same-origin', method: 'post', 
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
      body: JSON.stringify(newListing)})
    .then((response) => {
      if(response.status !== 200) {
        console.log('err in then');
      } else {
        return response.json()
        .then(() => fetchListings(store))
        .then(this.props.toggleModal)
        .then(this.props.resetNewListing)
        .then(setTimeout(this.props.updateClusters, 750))
        .then(this.props.showListingsInView)
      }
    }).catch((err) => {
      console.error('err in catch is', err);
    });
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
            newListing={this.props.newListing} showAddListingModal={this.props.showAddListingModal}
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
