import React from 'react';
import CustomModal from './Modal.jsx';


export default class ListingPageNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row text-center transparentBG">
        <p>Do you want to...</p>

        <div className="col-xs-8">
          <p>Select new category?</p>
          <select 
            className="form-control" 
            onChange={this.props.changeCategory}>
            {
              this.props.categories.map(function(category) {
                return <option key={category} value={category}>{category}</option>
              })
            }
          </select>
        </div>

        <div className="col-xs-4">
          <p>Add a new listing?</p>
          <button className="btn btn-success btn-sm" onClick={this.props.toggleModal}>
            Add Listing!
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
      </div>
    )
  }
}
