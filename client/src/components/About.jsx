import React from 'react';

export default function About(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h2>EtherList<br />
          <small>CraigsList, without the murderers</small>
        </h2>
        <h5>(Or, at least, very reputable ones...)</h5>
      </div>
      <div>
        <h3>Whatitdo</h3>
        <p>
          <strong>EtherList is an online community that cares.</strong>
          We care about how well behaved you are relative to your peers.
          EtherList enables strangers to engage other members of their community based on an entirely transparent system for establishing trust.
          Phew, that was a mouthful. Can somebody <strong>please</strong> reword that?
        </p>
      </div>
      <div>
        <h3>Whodunnit</h3>
        <div className="row">

          <div className="col-xs-3 text-center">
            <div>
              <img className="img-circle img-responsive" src="https://m.popkey.co/ce6d77/J6786.gif" />
            </div>
          </div>
          <div className="col-xs-3 text-center"><GitHub username="08martinm" /></div>
          <div className="col-xs-3 text-center"><GitHub username="donovanCarreno" /></div>
          <div className="col-xs-3 text-center"><GitHub username="grigorovskaya" /></div>
        </div>
      </div>
      <div>
        <h3>Whhy</h3>
        <p>
          Because you don't trust strangers online and neither do we!
        </p>
      </div>
    </div>
  )
}

class GitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
    this.getGitHubStuff(props.username);
  }

  getGitHubStuff(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(profile => { this.setState({profile}) })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <img className="img-circle img-responsive" src={this.state.profile.avatar_url} />
      </div>
    )
  }
}



