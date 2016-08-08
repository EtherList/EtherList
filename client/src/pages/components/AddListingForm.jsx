import React from 'react';
import { DateField } from 'react-date-picker';

export default class AddListingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group">
        <label className="control-label">Name</label>
        <input type="text" className="form-control" placeholder="Name" 
          onChange={this.props.handleChange}/>

        <label className="control-label">Description</label>
        <textarea className="form-control" placeholder="Enter a description of your listing here..." rows="3" id="comment"></textarea>

        <label className="control-label">Location</label>
        <input type="text" className="form-control" placeholder="Location" 
          onChange={this.props.handleChange}/>

        <label className="control-label">Date</label>
        <DateField className="form-control showWeekDayColors" dateFormat="YYYY-MM-DD hh:mm a"
          date={this.props.addListing.time} />

        <label className="control-label">Price</label>
        <input type="text" className="form-control" placeholder="Price"
          onChange={this.props.handleChange}/>

        <label className="control-label">Terms</label>
        <textarea className="form-control" rows="3" placeholder="Enter a description of your terms here..." id="comment"></textarea>
      </div>
    )
  }
}