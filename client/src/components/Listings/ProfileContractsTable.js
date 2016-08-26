import React from 'react';
import MyContractsModal from '../Modals/MyContractsModal.jsx';

export default class ProfileContractsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContract: null,
      showModal: false,
      isHovered: [{id: null}],
      myStyle: {
        backgroundColor: '#A9A9A9', 
        color: '#2c3e50', 
      }
    }
  }

  selectedContractData(listing) {
    this.setState({
      selectedContract: listing
    });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  onListingEnter(e) {
    if (e.target.id) {
      this.setState({isHovered: [this.props.contracts[e.target.id]]});
    } else {
      this.setState({isHovered: [this.props.contracts[e.target.parentElement.id]]});
    }
  }

  onListingLeave() {
    this.setState({isHovered: []});
  }

  render() {
    return (
      <div className="listingBox">
        <MyContractsModal selectedContract={this.state.selectedContract} showModal={this.state.showModal} 
          toggleModal={this.toggleModal.bind(this)}/>
          <div className="listingHeader flex-container" style={this.state.myStyle}>
            <div className="flex-item">Name</div>
            <div className="flex-item">Completed</div>
            <div className="flex-item">Buyer ID</div>
            <div className="flex-item">Comments</div>
          </div>

        <div className="flexbox">
          {(this.props.contracts || []).map((contract, index) =>
            <TableEntry key={index} contract={contract} selectedContractData={this.selectedContractData.bind(this)} toggleModal={this.toggleModal.bind(this)}
              isHovered={this.state.isHovered} thisId={contract.id} onListingEnter={this.onListingEnter.bind(this)} thisId={index}
              onMouseLeave={this.onListingLeave.bind(this)}
            />)}
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

    if (this.props.isHovered[0] === this.props.contract) {
      var myStyle = {
        backgroundColor: '#2c3e50', 
        color: 'white', 
        WebkitTransition: 'width 0.5s, height 0.5s, background-color 0.5s, -webkit-transform 0.5s',
        transition: 'width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s'
      }
    }

    return (
      <div id={this.props.thisId} className="flex-container" style={myStyle}
        onMouseOver={this.props.onListingEnter} onMouseLeave={this.props.onListingLeave} 
        onClick={() => {this.props.toggleModal(); this.props.selectedContractData(this.props.contract);}}>
        <div className="flex-item">Contract Name: {this.props.contract}</div>
        <div className="flex-item">Contract Completed: {this.props.contract}</div>
        <div className="flex-item">Buyer ID: {this.props.contract}</div>
        <div className="flex-item">Buyer Comments: {this.props.contract}</div>
      </div>
    )
  }
}
