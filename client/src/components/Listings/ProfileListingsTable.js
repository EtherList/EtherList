import React from 'react';
import EditListingModal from '../Modals/EditListingModal.jsx';

export default class ProfileListingsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedListing: null,
      showModal: false
    }
  }

  selectedListingData(listing) {
    this.setState({
      selectedListing: listing
    });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="listingBox">
        <EditListingModal selectedListing={this.state.selectedListing} showModal={this.state.showModal} toggleModal={this.toggleModal.bind(this)}/>
        <div className="listingHeader flex-container">
          <div className="flex-item">Name</div>
          <div className="flex-item">Description</div>
          <div className="flex-item">Price</div>
          <div className="flex-item">Completed</div>
        </div>

        <div className="flexbox">
          {(this.props.entries || []).map(entry =>
            <TableEntry key={entry.id} entry={entry} selectedListingData={this.selectedListingData.bind(this)} toggleModal={this.toggleModal.bind(this)}/>)}
        </div>
      </div>
    )
  }
}

let TableEntry = (props) => (
  <div className="flex-container" onClick={() => {props.toggleModal(); props.selectedListingData(props.entry);}}>
    <div className="flex-item">Name: {props.entry.name}</div>
    <div className="flex-item">Description: {props.entryDescription}</div>
    <div className="flex-item">Price: {props.entryPrice}</div>
    <div className="flex-item">Completed: {props.entryCompleted}</div>
  </div>
);
