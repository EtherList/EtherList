import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class MyContractsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.toggleModal} aria-labelledby="contained-modal-title">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">My Contracts</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-group">
            <label className="control-label">Name</label>
            <input type="text" className="form-control" name="name" value={this.props.selectedContract ? this.props.selectedContract.name : ''} />

            <label className="control-label">Completed</label>
            <input className="form-control" name="completed" value={this.props.selectedContract ? this.props.selectedContract.contractCompleted : ''} ></input>

              <label className="control-label">Buyer ID</label>
              <input className="form-control" name="buyerId" value={this.props.selectedContract ? this.props.selectedContract.buyerId : ''} ></input>

            <label className="control-label">Buyer Comments</label>
            <textarea type="text" className="form-control" rows="3" name="comments" value={this.props.selectedContract ? this.props.selectedContract.buyerComments : ''} />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-success">Enter Into Agreement</Button>
          <Button className="btn btn-danger" onClick={this.props.toggleModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
