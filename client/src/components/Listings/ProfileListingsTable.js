import React from 'react';
import EditListingModal from '../Modals/EditListingModal.jsx';

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
          <TableEntry key={entry.id} entry={entry} toggleModal={props.toggleModal}/>)}
      </div>
      <EditListingModal showModal={props.showModal}/>
    </div>
);

let TableEntry = (props) => (
  <div className="flex-container" onClick={() => props.toggleModal()}>
    <div className="flex-item">Name: {props.entry.name}</div>
    <div className="flex-item">Description: {props.entryDescription}</div>
    <div className="flex-item">Price: {props.entryPrice}</div>
    <div className="flex-item">Completed: {props.entryCompleted}</div>
  </div>
);

export default ProfileListingsTable
