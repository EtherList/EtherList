import React from 'react';
import CustomModal from '../Modals/Modal.jsx';


export default class ListingPageNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddListingModal: false,
    }
  }

  toggleModal() {
    this.setState({showAddListingModal: !this.state.showAddListingModal});
  }

  render() {
    return (
      <div className="flexbox categorySelect centerDiv">
        <select 
          selected="Select new category"
          className="form-control" 
          onChange={this.props.changeCategory}>
          {
            this.props.categories.map(function(category) {
              return <option key={category} value={category}>{category}</option>
            })
          }
        </select>

        <button className="margin10 btn btn-success btn-sm" onClick={this.toggleModal.bind(this)}>
          Add New Listing
        </button>
        <CustomModal 
          newListing={this.props.newListing} 
          showAddListingModal={this.state.showAddListingModal}
          toggleModal={this.toggleModal.bind(this)} 
          handleChange={this.props.handleChange}
          resetNewListing={this.props.resetNewListing}
          getListings={this.props.getListings}
          addListing={this.props.addListing}
        />
      </div>
    )
  }
}
