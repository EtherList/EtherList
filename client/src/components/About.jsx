import React from 'react';

export default function About(props) {
  return (
    <div id="about" className="container">
      <div className="jumbotron">
        <h2>EtherList<br />
          <small>The Reputable Marketplace</small>
        </h2>
      </div>
      <div>
        <h3>Who We Are</h3>
        <p>
          <strong>EtherList is an online community that cares. </strong>
          We care about our users having an enjoyable shopping experience.
          This is why EtherList uses Blockchain Technology to maintain a Reputation score for all of our users.
          The Reputation score is earned by engaging in successful transactions with other users.
          This enables users to have confidence in their transactions with other members of our community.
        </p>
      </div>
      <div>
        <h3>Meet The Team</h3>
        <div className="row">

          <div className="col-xs-3 text-center">
            <div>
              <img className="img-circle img-responsive" src="https://m.popkey.co/ce6d77/J6786.gif" />
              Casper Holmgreen
            </div>
          </div>
          <div className="col-xs-3 text-center"><GitHub username="08martinm" />Matt Martin</div>
          <div className="col-xs-3 text-center"><GitHub username="donovanCarreno" />Donovan Carreno</div>
          <div className="col-xs-3 text-center"><GitHub username="grigorovskaya" />Nat Grigorovskaya</div>
        </div>
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
