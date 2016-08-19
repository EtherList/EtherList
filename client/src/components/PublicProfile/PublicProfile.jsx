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
    console.log(window.location);
    
  }

  render() {
 
    return (
      <div>
        <div>
          <img src={this.state.user.imageURL} style={userpicStyle}/>
        </div>
        <div>
        <p>name: {this.state.user.name}</p>
        {/* TODO : only use wallet from DB, or let web3 provider plug in? */}
        <p>reputation: <Reputation wallet={this.state.user.wallet || accounts[0]}/> </p>
        <p>active contracts: {this.props.userContracts}</p>
        <p>active listings: {this.props.userListings}</p>
        <p><Button bsStyle='primary'>see history</Button></p>
        </div>
      </div>
      );
  }
};
