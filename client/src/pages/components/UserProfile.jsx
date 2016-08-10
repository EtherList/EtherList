import React from 'react';
import { Button } from 'react-bootstrap';
import { userProfileStyle, userpicStyle } from '../styles/categoryStyle.js';
import Listing from './pages/components/Listing.jsx';
var fakeUserpic = 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-rainbow-unicorn.png';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
 
    return (
      <div>
      <div>
        <img src={this.props.imageURL} src={fakeUserpic} style={userpicStyle}/>
      </div>
      <div>
      <p>name: {this.props.displayName}</p>
      <p>id: {this.props.facebookId}</p>
      <p>reputation: {this.props.reputation}</p>
      <p>active contracts: {this.props.userContracts}</p>
      <p>active listings: {this.props.userListings}</p>
      <p><Button bsStyle='primary' onClick={this.toggleModal}>see history</Button></p>
      </div>
      </div>
      );
  }
};
