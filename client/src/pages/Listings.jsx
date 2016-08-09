import React from 'react';
import ListingsTable from './components/ListingsTable.jsx';
import ListingPageNavigation from './components/ListingPageNavigation.jsx';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'CategoryName',
      show: false,
      addListing: {
        key: '',
        name: '',
        description: '',
        location: '',
        time: '',
        reputation: '',
        price: '',
        terms: '' 
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

  handleChange(e) {
    var setStateObj = this.state.addListing;
    setStateObj[e.target.name] = e.target.value;
  }

  resetAddListing() {
    this.setState({addListing: {
      key: '',
      name: '',
      description: '',
      location: '',
      time: '',
      reputation: '',
      price: '',
      terms: '' 
    }});
    setTimeout(function() { console.log('this.state.addListing is', this.state.addListing) }.bind(this), 1000);
  }

  render() {
    return (
      <div className="col-xs-12">
        <h3 className="text-center row">
          {'Search listings for ' + this.state.category}
        </h3>

        <ListingPageNavigation 
          categories={this.state.categories} 
          addListing={this.state.addListing} 
          show={this.state.show}
          changeCategory={this.changeCategory.bind(this)} 
          closeModal={this.closeModal.bind(this)}
          openModal={this.openModal.bind(this)} 
          handleChange={this.handleChange.bind(this)}
          resetAddListing={this.resetAddListing.bind(this)}
        />

        <ListingsTable listings={this.state.listings} />
      </div>
    )
  }
}
