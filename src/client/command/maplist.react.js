import './maplist.styl';
import Component from '../components/component.react.js';
import React from 'react';
// import immutable from 'immutable';
import uuid from '../lib/guid';
// import {ReactCSSTransitionGroup} from 'react';

import MapLocation from './maplocation.react';

const maplocations = [
  {name: 'US', coordinates: {x: 300, y: 215}},
  {name: 'West Europe', coordinates: {x: 675, y: 110}},
  {name: 'Russia', coordinates: {x: 1050, y: 105}},
  {name: 'Arabia', coordinates: {x: 930, y: 330}},
  {name: 'SouthEast', coordinates: {x: 1222, y: 428}},
  {name: 'Latin America', coordinates: {x: 425, y: 525}}
];

class MapList extends Component {
  render() {
    // const {jsonapi} = this.props;

    // locations will be lib
    // const maplocations = countries.mergeDeep(immutable.fromJS(locations)).toJS();

    return (
      <ul className='map-list'>
        {maplocations.map((maplocation, i) => {
          return (
            <MapLocation
              coordinates={maplocation.coordinates}
              key={uuid() + maplocations.name}
              locationindex={i}
              name={maplocation.name}
              obscurity={Math.round10(maplocation.obscurity, -1)}
              reputation={maplocation.reputation}
              />
          );
        })}
      </ul>
    );
  }
}

// MapList.propTypes = {
//   jsonapi: React.PropTypes.instanceOf(immutable.Map)
// };

export default MapList;
