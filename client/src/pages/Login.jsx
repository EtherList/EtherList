import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    console.log('fetch is about to happen');
    fetch('/auth/facebook', {  
        method: 'get',  
        headers: {  
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        } 
      })
      .then(  
        function(response) {  
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
            return;  
          }

          // Examine the text in the response  
          response.json().then(function(data) {  
            console.log(data);  
          });  
        }  
      )  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
      });
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
