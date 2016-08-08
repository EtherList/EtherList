import React from 'react';
import {Link} from 'react-router';
import ListingsTable from './components/ListingsTable.jsx';
import { Button, Modal } from 'react-bootstrap';
import { DateField } from 'react-date-picker'


export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'CategoryName',
      show: false,
      addListing: {
        key: 'test',
        name: 'test',
        description: 'test',
        location: 'test',
        time: this.createDateDefault(),
        reputation: 'test',
        price: 'test',
        terms: 'test' 
      },
      categories: ['whatever', 'hello', 'thisWorks', 'tests\'n\'stuff'],
      listings: [{
        key: 1,
        name: 'rideshare',
        description: 'I need someone to take me from SFO to LA \
                      preferably in a luxury vehicle like a Ferrari.',
        location: [37.6213, 122.3790],
        time: '08/12/2016',
        reputation: 500,
        price: 5,
        terms: 'I require that my driver provide me with humorous jokes, \
                beverages, entertainment, and let me listen to music of my choice.'
        },
        {
        key: 2,
        name: 'selling a spoon',
        description: 'I am selling a spoon i found on the ground outside.',
        location: [39.1234, 120.1234],
        time: 'N/A',
        reputation: 1,
        price: 9000,
        terms: 'You must only use this spoon for eating Cocoa Puff cereal.'
        },
        {
        key: 3,
        name: 'water my lawn',
        description: 'Im busy watching tv and want someone to come over to water \
                      my lawn. Please dont distrub me though, Im in the middle of GoT',
        location: [37.6213, 122.3790],
        time: '08/01/2016',
        reputation: -20,
        price: 1.50,
        terms: 'You must provide your own water to water my lawn.'
        },
        {
        key: 4,
        name: 'rideshare',
        description: 'I need someone to take me from SFO to LA \
                      preferably in a luxury vehicle like a Ferrari.',
        location: [37.6213, 122.3790],
        time: '08/12/2016',
        reputation: 500,
        price: 5,
        terms: 'I require that my driver provide me with humorous jokes, \
                beverages, entertainment, and let me listen to music of my choice.'
        },
        {
        key: 5,
        name: 'selling a spoon',
        description: 'I am selling a spoon i found on the ground outside.',
        location: [39.1234, 120.1234],
        time: 'N/A',
        reputation: 1,
        price: 9000,
        terms: 'You must only use this spoon for eating Cocoa Puff cereal.'
        },
        {
        key: 6,
        name: 'water my lawn',
        description: 'Im busy watching tv and want someone to come over to water \
                      my lawn. Please dont distrub me though, Im in the middle of GoT',
        location: [37.6213, 122.3790],
        time: '08/01/2016',
        reputation: -20,
        price: 1.50,
        terms: 'You must provide your own water to water my lawn.'
        }
      ]
    }
  }

  changeCategory(e) {
    var value = e.target.value;
    this.setState({category: value});
  }

  openModal() {
    this.setState({show: true});
  }

  closeModal() {
    this.setState({show: false});
  }

  handleChange() {

  }

  createDateDefault() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = mm + '/' + dd + '/' + yyyy + ' 12:00';
  }

  // calendarOnChange(dateString, { dateMoment, timestamp }) => {
  //   this.setState({addListing.date, dateString})
  // }

  render() {
    return (
      <div className="col-xs-12">
        
        <div className="row col-xs-12">
          <h3 className="text-center">
            {'Search listings for ' + this.state.category}
          </h3>
        </div>

        <div className="row text-center transparentBG col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8">
          <p>Do you want to...</p>
          <div className="col-xs-8">
            <p>Select new category?</p>
            <select className="form-control" onChange={this.changeCategory.bind(this)}>
              {
                this.state.categories.map(function(category) {
                  return <option key={category} value={category}>{category}</option>
                })
              }
            </select>
          </div>

          <div className="col-xs-4">
            <p>Add a new listing?</p>

            <button className="btn btn-success btn-sm" onClick={this.openModal.bind(this)}>
              Add Listing!
            </button>

            <Modal
              show={this.state.show}
              onHide={this.closeModal.bind(this)}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  Add Listing
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                Add your listing here:
                <div className="form-group">
                  <label className="control-label">Name</label>
                  <input type="text" className="form-control" placeholder="Name" 
                    value={this.state.username} onChange={this.handleChange.bind(this)}/>

                  <label className="control-label">Description</label>
                  <textarea className="form-control" placeholder="Enter a description of your listing here..." rows="3" id="comment"></textarea>

                  <label className="control-label">Location</label>
                  <input type="text" className="form-control" placeholder="Location" 
                    value={this.state.username} onChange={this.handleChange.bind(this)}/>
                </div>

                <label className="control-label">Date</label>
                <div className="row">
                  <DateField dateFormat="YYYY-MM-DD HH:mm" date={this.state.addListing.time} />
                </div>

                <div className="form-group">
                  <label className="control-label">Price</label>
                  <input type="text" className="form-control" placeholder="Price" 
                    value={this.state.username} onChange={this.handleChange.bind(this)}/>

                  <label className="control-label">Terms</label>
                  <textarea className="form-control" rows="3" placeholder="Enter a description of your terms here..." id="comment"></textarea>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button className="btn btn-success" onClick={this.closeModal.bind(this)}>Add Listing</Button>
                <Button className="btn btn-danger" onClick={this.closeModal.bind(this)}>Cancel</Button>
              </Modal.Footer>
            </Modal>

          </div>
        </div>

        <ListingsTable listings={this.state.listings} />
      </div>
    )
  }
}