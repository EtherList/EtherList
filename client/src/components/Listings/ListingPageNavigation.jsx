import React from 'react';
import CustomModal from '../Modals/Modal.jsx';


export default class ListingPageNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexbox categorySelect centerDiv">
        <button className="margin10 btn btn-success btn-sm" onClick={this.props.toggleModal}>
          Add New Listing
        </button>
        <CustomModal 
          newListing={this.props.newListing} 
          showModal={this.props.showModal}
          toggleModal={this.props.toggleModal} 
          handleChange={this.props.handleChange}
          resetNewListing={this.props.resetNewListing}
          getListings={this.props.getListings}
          addListing={this.props.addListing}
        />
      </div>
    )
  }
}
