// dumb wrapper that renders:
// - PublicProfile
// - PrivateProfile
import React from 'react';
import PublicProfile from './PublicProfile.jsx';
import PrivateProfile from './PrivateProfile.jsx';

export default class UserProfile extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  componentWillMount() {
    this.getMyListings();
    this.getMyProfile();
  }

  getMyListings() {
    fetch('/listings').then((response) => {
      if (response.status !== 200) {
        this.props.onFail(err);
      } else {
        return response.json().then((myListings) => {
          this.props.onFilterByUser(JSON.parse(this.props.params.userId));
          this.props.onReceive(myListings);
        });
      }
    }).catch((err) => {
      console.log('error');
    });
  }

  getMyProfile() {
    fetch('/profile?userId=' + this.props.params.userId).then((response) => {
      if (response.status !== 200) {
        this.props.onFail(err);
      } else {
        return response.json().then((myProfile) => {
          this.props.onProfileReceive(myProfile);
        });
      }
    });
  }

  toggleModal() {
    console.log('you win');
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div>
        <PublicProfile myProfile={this.props.profile}/>
        <PrivateProfile showModal={this.state.showModal} toggleModal={this.toggleModal.bind(this)} listings={this.props.listings}/>
      </div>
    )
  }

}
