import React from 'react';

const ProfileListingsTable = (props) => (
    <div>
      {(props.entries || []).map(entry =>
        <TableEntry entry={entry}/>)}
    </div>
);

let TableEntry = (props) => (
  <div>
    <div>
  	   Name: {props.entry.name}
    </div>
    <div>
      Description: {props.entryDescription}
    </div>
    <div>
      Price: {props.entryPrice}
    </div>
    <div>
      Completed: {props.entryCompleted}
    </div>
    {// Edit: // clickable: opens table entry for editing
    }
  </div>
);

export default ProfileListingsTable
