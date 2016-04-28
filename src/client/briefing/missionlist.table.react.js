import './missionlist.table.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import uuid from '../lib/guid';

import MissionListItem from './missionlist.item.react';

class MissionsListTable extends Component {
  render() {
    const {missions} = this.props;

    const missionlist = missions.map(mission => {
      return (
        <MissionListItem
          key={uuid() + 'missionlist'}
          mission={mission}
          />
      );
    });

    return (
      <div id='MissionsListTable'>
        <table>
          <thead>
            <tr>
              <th>{msg('briefing.missionlist.headers.title')}</th>
              <th>{msg('briefing.missionlist.headers.region')}</th>
              <th>{msg('briefing.missionlist.headers.tier')}</th>
              <th>{msg('briefing.missionlist.headers.ETA')}</th>
              <th>{msg('briefing.missionlist.headers.pass')}</th>
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
