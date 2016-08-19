import React from 'react';
import {Link} from 'react-router';

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    //forcing the page to reload in order to make a server-side call to FB for authentication
    this.props.onLoginAttempt();
    window.location = window.location.origin + "/auth/facebook";
  }


  render() {
    return (
              <div>
                <button className='signIn btn btn-success' type='button' onClick={() => {this.handleSubmit()}}>
                  Log In
                </button>
              </div>
    )
  }
}
