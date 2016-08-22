import React from 'react';
import { Button } from 'react-bootstrap';
import { userProfileStyle, userpicStyle } from '../../utils/customStyle.js';
import keyStorage from '../../../../keyStorage.js';
import Reputation from '../Reputation/Reputation.jsx';

export default class PublicProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null
    };
  }

  componentWillMount() {
    
  }

  render() {
 
    return (
      <div>
        <div>
          <img src={this.state.profile.imageURL} style={userpicStyle}/>
        </div>
        <div>
        <p>name: {this.state.profile.name}</p>
        {/* TODO : only use wallet from DB, or let web3 provider plug in? */}
        <p>reputation: <Reputation wallet={this.state.profile.wallet || accounts[0]}/> </p>
        <p>active contracts: {this.props.contracts}</p>
        <p>active listings: {this.props.listings}</p>
        <p><Button bsStyle='primary'>see history</Button></p>
        </div>
      </div>
      );
  }
};
