import React from 'react';
import CustomModal from './Modal.jsx';


export default class ListingPageNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row text-center transparentBG col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8">
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
            show={this.props.show}
            toggleModal={this.props.toggleModal} 
            handleChange={this.props.handleChange}
            resetNewListing={this.props.resetNewListing}
            addListing={this.props.addListing}
          />
        </div>
      </div>
    )
  }
}
