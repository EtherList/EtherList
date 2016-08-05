import React from 'react';

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
                <label className="control-label">Username</label>
                <div>
                  <input type="text" className="form-control" placeholder="Username" onChange={this.handleUsernameChange}/>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label">Password</label>
                <div>
                  <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange}/>
                </div>
              </div>

              <div>
                <button className='signIn btn btn-success' type='button' onClick={this.handleSubmit}>Sign In!</button>
                OR                
                <button className='signUp btn btn-danger'>Sign Up!</button>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
