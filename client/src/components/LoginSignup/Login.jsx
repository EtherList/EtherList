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

              <div>
                <Link to='/auth/facebook'><button className='signIn btn btn-success' type='button' 
                  onClick={() => {this.handleSubmit()}}>
                  Sign In
                </button></Link>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
