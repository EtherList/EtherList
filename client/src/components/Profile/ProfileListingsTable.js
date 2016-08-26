import React from 'react';
import EditListingModal from '../Modals/EditListingModal.jsx';

export default class ProfileListingsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedListing: null,
      showModal: false,
      isHovered: [{id: null}],
      myStyle: {
        backgroundColor: '#A9A9A9', 
        color: '#2c3e50', 
      }
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

  onListingEnter(e) {
    if (e.target.id) {
      this.setState({isHovered: [this.props.entries[e.target.id]]});
    } else {
      this.setState({isHovered: [this.props.entries[e.target.parentElement.id]]});
    }
  }

  onListingLeave() {
    this.setState({isHovered: []});
  }

  render() {
    return (
      <div className="listingBox">
        <EditListingModal selectedListing={this.state.selectedListing} showModal={this.state.showModal} 
          toggleModal={this.toggleModal.bind(this)} currentListing={this.state.selectedListing}
        />
        <div className="listingHeader flex-container" style={this.state.myStyle}>
          <div className="flex-item">Name</div>
          <div className="flex-item">Description</div>
          <div className="flex-item">Price</div>
          <div className="flex-item">Completed</div>
        </div>

        <div className="flexbox">
          {(this.props.entries || []).map((entry) => {
              return (<TableEntry isHovered={this.state.isHovered} entry={entry} key={entry.id} thisId={entry.id} entry={entry} selectedListingData={this.selectedListingData.bind(this)} 
                toggleModal={this.toggleModal.bind(this)} onListingEnter={this.onListingEnter.bind(this)} onMouseLeave={this.onListingLeave.bind(this)}
              />)
            })}
        </div>
      </div>
    )
  }
}

export class TableEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var myStyle = {};
    if (this.props.isHovered[0] === this.props.entry) {
      var myStyle = {
        backgroundColor: '#2c3e50', 
        color: 'white', 
        WebkitTransition: 'width 0.5s, height 0.5s, background-color 0.5s, -webkit-transform 0.5s',
        transition: 'width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s'
      }
    }

    return (
      <div id={this.props.thisId - 1} style={myStyle} className="flex-container" 
        onMouseOver={this.props.onListingEnter} onMouseLeave={this.props.onListingLeave} 
        onClick={() => {this.props.toggleModal(); this.props.selectedListingData(this.props.entry);}}
      >
        <div className="flex-item">Name: {this.props.entry.name}</div>
        <div className="flex-item">Description: {this.props.entryDescription}</div>
        <div className="flex-item">Price: {this.props.entryPrice}</div>
        <div className="flex-item">Completed: {this.props.entryCompleted}</div>
      </div>
    )
  }
}

