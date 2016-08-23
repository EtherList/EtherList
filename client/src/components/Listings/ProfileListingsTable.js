import React from 'react';

const ProfileListingsTable = (props) => (
    <div>
      {(props.entries || []).map(entry =>
        <TableEntry entry={entry}/>)}
    </div>
);

let TableEntry = (props) => (
  <div>
  	Name: {props.entry.name}
    {
    // Description: {props.entryDescription}
    // Price: {props.entryPrice}
    // Completed: {props.entryCompleted}
    // Edit: // clickable: opens table entry for editing
    }
  </div>
);

export default ProfileListingsTable
