import './maplist.styl';
import Component from '../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import uuid from '../lib/guid';

import MapLocation from './maplocation.react';

const locations = [
  {name: 'US', coordinates: {x: 425, y: 400}},
  {name: 'West Europe', coordinates: {x: 765, y: 340}},
  {name: 'Russia', coordinates: {x: 1000, y: 275}},
  {name: 'Arabia', coordinates: {x: 980, y: 500}},
  {name: 'SouthEast', coordinates: {x: 1200, y: 610}},
  {name: 'Latin America', coordinates: {x: 425, y: 575}}
];

class MapList extends Component {
  render() {
    const {jsonapi} = this.props;
    const countries = jsonapi.get('countries');

    // locations will be lib
    const maplocations = countries.mergeDeep(immutable.fromJS(locations)).toJS();

    return (
      <ul className='map-list'>
        {maplocations.map((maplocation, i) => {
          return (
            <MapLocation
              coordinates={maplocation.coordinates}
              key={uuid() + maplocations.name}
              locationindex={i}
              name={maplocation.name}
              obscurity={maplocation.obscurity}
              reputation={maplocation.reputation}
              />
          );
        })}
      </ul>
    );
  }
}

MapList.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MapList;
