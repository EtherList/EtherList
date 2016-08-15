import React from 'react';

export default class Reputation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reputation: 0
    }
  }

  componentWillReceiveProps() {
    let etherrep = EtherRep.deployed();
    etherrep.getReputation.call(this.props.wallet).then(rep => {
      console.log(rep.valueOf());
      this.setState({reputation: rep.valueOf()});
    });
  }

  render() {
    return (
      <span>{this.state.reputation || '[0]'}</span>
    )
  }
}

// Reputation.propTypes = {
//   wallet: React.PropTypes.string.isRequired
// }
