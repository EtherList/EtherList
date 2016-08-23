import React from 'react';

const ProfileContractsTable = (props) => (
    <div>
      {props.entries.map(entry =>
        <TableEntry entryName={entry}/>)}
    </div>
);

let TableEntry = (props) => (
  <div>
  	Name: {props.entryName}
    {
    // Description: {props.entryDescription}
    // Price: {props.entryPrice}
    // Completed: {props.entryCompleted}
    // Edit: // clickable: opens table entry for editing
    }
  </div>
);

export default ProfileContractsTable
