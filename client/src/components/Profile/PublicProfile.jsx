import React from 'react';
import { Button } from 'react-bootstrap';
import { userProfileStyle, userpicStyle } from '../../utils/customStyle.js';
import Reputation from '../Reputation/Reputation.jsx';

const PublicProfile = (props) => (
  <div>
    <div>
      <img src={props.myProfile.imageURL} style={userpicStyle}/>
    </div>
    <div>
      <p>name: {props.myProfile.name}</p>
      {/* TODO : only use wallet from DB, or let web3 provider plug in? */}
      <p>reputation: <Reputation wallet={props.myProfile.wallet || 0}/> </p>
    </div>
  </div>
);

export default PublicProfile
