import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <div id="loginForm" className="col-xs-10 col-xs-offset-1 col-sm-8 
            col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <form className="form-horizontal col-xs-8 col-xs-offset-2">
            <fieldset>

              <div className="form-group">
                <label className="control-label">
                  Username
                </label>
                <input type="text" className="form-control" 
                  placeholder="Username" onChange={this.handleUsernameChange}/>

                <label className="control-label">
                  Password
                </label>
                <input type="password" className="form-control" 
                  placeholder="Password"/>
              </div>

              <div>
                <button className='signIn btn btn-success' type='button' 
                  onClick={this.handleSubmit}>
                  Sign In
                </button>

                OR

                <Link to="/signup"><button className='signUp btn btn-danger'>
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
