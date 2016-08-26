import React from 'react';
import ProfileListingsTable from '../Listings/ProfileListingsTable';
import ProfileContractsTable from '../Listings/ProfileContractsTable';
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
          <Tab eventKey={2} title="My Contracts"><ProfileContractsTable contracts={['one', 'two', 'three', 'four', 'five']}/></Tab>
        </Tabs>
      </div>
    )
  }
}
