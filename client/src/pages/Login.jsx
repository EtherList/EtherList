import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    //forcing the page to reload in order to make a server-side call to FB for authentication
    window.location.reload();
  }


  render() {
    return (
      <div className="flex-vertical-container">
        <div>
          <form className="form-horizontal col-xs-8 col-xs-offset-2">
            <fieldset>

              <div className="form-group">
                <label className="control-label">
                  Username
                </label>
                <input type="text" className="form-control" 
                  placeholder="Username" onChange={() => {this.handleUsernameChange()}}/>

                <label className="control-label">
                  Password
                </label>
                <input type="password" className="form-control" 
                  placeholder="Password"/>
              </div>

              <div>
                <Link to='/auth/facebook'><button className='signIn btn btn-success' type='button' 
                  onClick={() => {this.handleSubmit()}}>
                  Sign In
                </button></Link>

                OR

                <Link to="/signup"><button className='signUp btn btn-primary'>
                    Go to Sign Up
                </button></Link>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
