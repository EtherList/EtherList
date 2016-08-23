import React from 'react';

export default class MapPin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        className="mapPin"
        key={this.props.key}
        style={this.props.myStyle}
      >{ () => {
                if (Object.keys(listing.cluster).length < 1) {
                  return "";
                } else {
                  console.log('should have a number');
                  return Object.keys(listing.cluster).length;
                }
              }}

      </div>
    )
  }
}
