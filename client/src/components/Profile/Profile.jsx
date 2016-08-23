// dumb wrapper that renders:
// - PublicProfile
// - PrivateProfile
import React from 'react';
import PublicProfile from './PublicProfile.jsx';
import PrivateProfile from './PrivateProfile.jsx';

export default class UserProfile extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getMyListings();
    this.getMyProfile();
  }

  getMyListings() {
    this.props.onFetch();
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
      this.props.onFail(err);
      console.error(err);
    });
  }

  getMyProfile() {
    fetch('/profile?userId=' + this.props.params.userId).then((response) => {
      if (response.status !== 200) {
        this.props.onFail(err);
      } else {
        return response.json().then((myProfile) => {
          console.log('myProfile', myProfile);
          this.props.onProfileReceive(myProfile);
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <PublicProfile myProfile={this.props.profile}/>
        </div>
        <div>
          <PrivateProfile listings={this.props.listings}/>
        </div>
      </div>
    )
  }

}
