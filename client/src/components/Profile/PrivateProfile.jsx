import React from 'react';
import ProfileListingsTable from '../Listings/ProfileListingsTable';
import ProfileContractsTable from '../Listings/ProfileContractsTable';
import { Tab, Tabs } from 'react-bootstrap';

const PrivateProfile = (props) => (
  <div>
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="My Listings"><ProfileListingsTable entries={props.listings} /></Tab>
      <Tab eventKey={2} title="My Contracts">My Contracts Info Goes Here</Tab>
    </Tabs>
  </div>
);

export default PrivateProfile
