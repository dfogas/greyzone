import './missionlist.table.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import uuid from '../lib/guid';

import MissionListItem from './missionlist.item.react';

class MissionsListTable extends Component {
  render() {
    const {activemission, missions} = this.props;

    const missionlist = missions.map(mission => {
      return (
        <MissionListItem
          isSelected={mission.get('id') === activemission.get('id')}
          key={uuid() + 'missionlist'}
          mission={mission}
          />
      );
    });
    console.log(missionlist);

    return (
      <div id='MissionsListTable'>
        {missionlist.size &&
          <table>
            <thead>
              <tr>
                <th>{msg('briefing.missionlist.headers.title')}</th>
                <th>{msg('briefing.missionlist.headers.region')}</th>
                <th>{msg('briefing.missionlist.headers.tier')}</th>
                <th>{msg('briefing.missionlist.headers.ETA')}</th>
                <th>{msg('briefing.missionlist.headers.pass')}</th>
                <th>{msg('briefing.missionlist.headers.specials')}</th>
              </tr>
            </thead>
            <tbody>
              {missionlist}
            </tbody>
          </table>}
        {!missionlist.size &&
          <div id='MissionListTablePlaceholder'>No Missions Available</div>}
      </div>
    );
  }
}

MissionsListTable.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  missions: React.PropTypes.instanceOf(immutable.List)
};

export default MissionsListTable;
