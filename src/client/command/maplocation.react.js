import './maplocation.styl';
import Component from '../components/component.react.js';
import React from 'react';
import uuid from '../lib/guid';

class MapLocation extends Component {
  render() {
    const {coordinates, locationindex, name, obscurity, reputation} = this.props;
    return (
      <div
        className='map-location'
        id={name + 'MapLocation'}
        key={uuid() + locationindex}
        style={{top: coordinates.y, left: coordinates.x, position: 'absolute'}}
        >
        <span className='maplocation-tag'>{name}</span>
        <span className='maplocation-tag'>{!!obscurity && obscurity}</span>
        <span className='maplocation-tag'>{!!reputation && reputation}</span>
      </div>
    );
  }
}

MapLocation.propTypes = {
  coordinates: React.PropTypes.object,
  locationindex: React.PropTypes.number,
  name: React.PropTypes.string,
  obscurity: React.PropTypes.number,
  reputation: React.PropTypes.number
};

export default MapLocation;
