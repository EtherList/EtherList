import React from 'react';
import ProfileListingsTable from '../Listings/ProfileListingsTable';
import ProfileContractsTable from '../Listings/ProfileContractsTable';

const PrivateProfile = (props) => (
  <div>
    <ul className="nav navbar-nav">
      <li>My Listings</li>
      <li>My Contracts</li>
    </ul>
    <div>
      <div>
        <ProfileContractsTable entries={['one', 'two', 'three']} />
      </div>
      <div>
        <ProfileListingsTable entries={props.listings} />
      </div>
    </div>
  </div>
);

export default PrivateProfile
