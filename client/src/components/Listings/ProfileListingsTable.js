import React from 'react';

const ProfileListingsTable = (props) => (
    <div className="listingBox">

      <div className="listingHeader flex-container">
        <div className="flex-item">Name</div>
        <div className="flex-item">Description</div>
        <div className="flex-item">Price</div>
        <div className="flex-item">Completed</div>
      </div>

      <div className="flexbox">
        {(props.entries || []).map(entry =>
          <TableEntry entry={entry}/>)}
      </div>
    </div>
);

let TableEntry = (props) => (
  <div className="flex-container">
    <div className="flex-item">Name: {props.entry.name}</div>
    <div className="flex-item">Description: {props.entryDescription}</div>
    <div className="flex-item">Price: {props.entryPrice}</div>
    <div className="flex-item">Completed: {props.entryCompleted}</div>
  </div>
);

export default ProfileListingsTable
