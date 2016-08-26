import React from 'react';
import MyContractsModal from '../Modals/MyContractsModal.jsx';

export default class ProfileContractsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContract: null,
      showModal: false
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

  render() {
    return (
      <div className="listingBox">
        <MyContractsModal selectedContract={this.state.selectedContract} showModal={this.state.showModal} toggleModal={this.toggleModal.bind(this)}/>
          <div className="listingHeader flex-container">
            <div className="flex-item">Name</div>
            <div className="flex-item">Completed</div>
            <div className="flex-item">Buyer ID</div>
            <div className="flex-item">Comments</div>
          </div>

        <div className="flexbox">
          {(this.props.contracts || []).map(contract =>
            <TableEntry contract={contract} selectedContractData={this.selectedContractData.bind(this)} toggleModal={this.toggleModal.bind(this)}/>)}
        </div>
      </div>
    )
  }
}

let TableEntry = (props) => (
  <div className="flex-container" onClick={() => {props.toggleModal(); props.selectedContractData(props.contract);}}>
    <div className="flex-item">Contract Name: {props.contract}</div>
    <div className="flex-item">Contract Completed: {props.contract}</div>
    <div className="flex-item">Buyer ID: {props.contract}</div>
    <div className="flex-item">Buyer Comments: {props.contract}</div>
  </div>
);
