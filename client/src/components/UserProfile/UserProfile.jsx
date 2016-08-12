import React from 'react';
import { Button } from 'react-bootstrap';
import { userProfileStyle, userpicStyle } from '../../utils/customStyle.js';
var fakeUserpic = 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-rainbow-unicorn.png';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        imageURL: ''
      }
    };
  }

  componentWillMount() {
    fetch('/profile', {credentials: 'same-origin'}).then((response) => {
      if(response.status !== 200) {
        //TODO: re-route unauthenticated users
      }
      return response.json().then((data) => {
        this.setState({
          user: { 
            name: data.name,
            imageURL: data.imageURL
          }
        });
      });
    }).catch((err) => {
      console.error(err);
    });

  }

  render() {
 
    return (
      <div>
      <div>
        <img src={this.state.user.imageURL} style={userpicStyle}/>
      </div>
      <div>
      <p>name: {this.state.user.name}</p>
      <p>reputation: 20 </p>
      <p>active contracts: {this.props.userContracts}</p>
      <p>active listings: {this.props.userListings}</p>
      <p><Button bsStyle='primary'>see history</Button></p>
      </div>
      </div>
      );
  }
};
