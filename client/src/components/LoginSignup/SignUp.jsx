import React from 'react';
import {Link} from 'react-router';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      ConfirmPassword: '',
      ConfirmPWClassName: 'form-group'
    }
  }

  handleChange(event) {
    var setStateObj = {};
    setStateObj[event.target.placeholder] = event.target.value;
    this.setState(setStateObj);
  }

  confirmPassword(event) {
    var inputVal = event.target.value;
    var confirmAgainst = (event.target.placeholder === "Password") ?
      "ConfirmPassword" : "Password";
    if (inputVal !== this.state[confirmAgainst] && inputVal !== "" && this.state[confirmAgainst] !== "") {
      this.setState({ConfirmPWClassName: 'form-group has-error'});
    } else {
      this.setState({ConfirmPWClassName: 'form-group'});
    }
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <div id="loginForm" className="col-xs-10 col-xs-offset-1 col-sm-8 
            col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <form className="form-horizontal col-xs-8 col-xs-offset-2" onSubmit={this.handleSubmit}>
            <fieldset>

              <div className="form-group">
                <label className="control-label">
                  Username
                </label>
                <input type="text" className="form-control" 
                  placeholder="Username" value={this.state.username} onChange={this.handleChange.bind(this)}/>
              </div>

              <div className="form-group">
                <label className="control-label">
                  Password
                </label>
                <input type="password" className="form-control" 
                  placeholder="Password" onChange={this.handleChange.bind(this)} />
              </div>

              <div className={this.state.ConfirmPWClassName} onChange={this.confirmPassword.bind(this)}>
                <label className="control-label">
                  Confirm Password
                </label>
                <input type="password" className="form-control" 
                  placeholder="Confirm Password" onChange={this.handleChange.bind(this)} />
              </div>

              <div>
                <button className='signIn btn btn-success' type='button' 
                  onClick={this.handleSubmit}>
                  Sign Up!
                </button>

                OR
                                
                <Link to="/login"><button className='signUp btn btn-danger'>
                    Go to Log In!
                </button></Link>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
