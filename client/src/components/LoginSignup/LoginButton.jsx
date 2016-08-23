import React from 'react';

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
  }

  attemptLogin() {
    //forcing the page to reload in order to make a server-side call to FB for authentication
    this.props.onLoginAttempt();
    window.location = window.location.origin + "/auth/facebook";
  }

  logout() {
    this.props.onLogout();
    window.location = window.location.origin + "/logout";
  }

  render() {
    let action = this.props.user ? () => {this.logout()} : () => {this.attemptLogin()};
    return (
      <div>
        <button className='signIn btn btn-info' type='button' onClick={action}>
          { this.props.user ? '' : <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" style={{height: "1em"}} /> }
          &nbsp;
          { this.props.user ? 'Log out' : 'Log in' }
        </button>
      </div>
    )
  }
}
