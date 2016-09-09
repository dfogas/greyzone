import './missionlist.table.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import prop from '../lib/general/r.i.prop';

import MissionListItem from './missionlist.item.react';

class MissionsListTable extends Component {
  render() {
    const {jsonapi} = this.props;
    const activemission = prop('activemission', jsonapi);
    const missions = jsonapi.get('missions');

    const missionlist = missions.map(mission => {
      return (
        <MissionListItem
          isSelected={mission.get('id') === activemission.get('id')}
          jsonapi={jsonapi}
          mission={mission}
          />
      );
    });
    // console.log(missionlist);

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
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionsListTable;
