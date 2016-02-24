import './missionlist.table.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import MissionListItem from './missionlist.item.react';

class MissionsListTable extends Component {
  render() {
    const {missions} = this.props;

    const missionlist = missions.map(mission => {
      return (
        <MissionListItem
          mission={mission}
          />
      );
    });

    return (
      <div id='MissionsListTable'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Region</th>
              <th>Tier</th>
              <th>ETA</th>
              <th>Pass</th>
            </tr>
          </thead>
          <tbody>
            {missionlist}
          </tbody>
        </table>
      </div>
    );
  }
}

MissionsListTable.propTypes = {
  missions: React.PropTypes.instanceOf(immutable.List)
};

export default MissionsListTable;
