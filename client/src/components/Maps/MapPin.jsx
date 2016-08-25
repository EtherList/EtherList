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
      >{this.props.text}
      </div>
    )
  }
}
