import React from 'react';
import ProfileListingsTable from './ProfileListingsTable';
import ProfileContractsTable from './ProfileContractsTable';
import { Tab, Tabs } from 'react-bootstrap';

export default class PrivateProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="My Listings"><ProfileListingsTable entries={this.props.listings} /></Tab>
          <Tab eventKey={2} title="My Contracts"><ProfileContractsTable contracts={this.props.contracts}/></Tab>
        </Tabs>
      </div>
    )
  }
}
