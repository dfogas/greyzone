import './maplocation.styl';
import Component from '../components/component.react.js';
import React from 'react';
import uuid from '../lib/guid';

class MapLocation extends Component {
  displayCountry() {
    console.log('boom!');
    // this.props.style = {width: 150, height: 220};
  }

  render() {
    const {coordinates, locationindex, name, obscurity, reputation} = this.props;
    return (
      <div
        className='map-location'
        id={name + 'MapLocation'}
        key={uuid() + locationindex}
        onMouseOver={this.displayCountry.bind(this)}
        style={{top: coordinates.y, left: coordinates.x + '', position: 'absolute'}}
        >
        <span className='maplocation-tag'>Name: {name}</span>
        <span className='maplocation-tag'>Obscurity: {obscurity}</span>
        <span className='maplocation-tag'>Reputation: {reputation}</span>
      </div>
    );
  }
}

MapLocation.propTypes = {
  coordinates: React.PropTypes.array,
  locationindex: React.PropTypes.number,
  name: React.PropTypes.string,
  obscurity: React.PropTypes.number,
  reputation: React.PropTypes.number
};

export default MapLocation;
