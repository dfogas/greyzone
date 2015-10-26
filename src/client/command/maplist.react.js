import './maplist.styl';
import Component from '../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import uuid from '../lib/guid';

import MapLocation from './maplocation.react';

const locations = [
  {name: 'US', coordinates: {x: 850, y: 800}},
  {name: 'France', coordinates: {x: 1530, y: 680}},
  {name: 'Russia', coordinates: {x: 1800, y: 550}},
  {name: 'Arabia', coordinates: {x: 1960, y: 1000}},
  {name: 'SouthEast', coordinates: {x: 2400, y: 1220}},
  {name: 'Latin America', coordinates: {x: 950, y: 1150}}
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
