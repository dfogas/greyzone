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
        key={uuid()+locationindex}
        onMouseOver={this.displayCountry.bind(this)}
        style={{top: coordinates.y, left: coordinates.x + '', position: 'absolute'}}
        >
        Name: {name}
        Obscurity: {obscurity}
        Reputation: {reputation}
      </div>
    );
  }
}

export default MapLocation;
