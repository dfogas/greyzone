import './dashboard.missions.list.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import dayandtime from '../../lib/dayandtime';
import determiningIcon from '../../lib/determiningicon';

class DashboardMissionsList extends Component {
  render() {
    const {missions} = this.props;
    return (
      <div
        id="DashboardMissionsList"
        >
        <table>
          <thead>
            <th>Title</th>
            <th>Tier</th>
            <th>Country</th>
            <th>Specials</th>
            <th>ETA</th>
            <th>Rewards</th>
            <th>Losses</th>
          </thead>
          <tbody>
          {missions.map(mission => {
            const ETAtime = (mission.get('ETA') - new Date().getTime() > 0) ? (mission.get('ETA') - new Date().getTime()) : 0;
            const hours = Math.floor(ETAtime / (60 * 60 * 1000));
            const minutes = Math.floor((ETAtime % (60 * 60 * 1000) / (60 * 1000)));
            return (
              <tr>
                <td>{mission.get('title')}</td>
                <td>{mission.get('tier')}</td>
                <td>{mission.get('inCountry')}</td>
                <td>{mission.get('forcefail') ? 'forced' : 'none'}</td>
                <td>{ETAtime === 0 ? 'Expired' :
                  hours + ':' + Math.floor(minutes / 10) + '' + (minutes % 10)}</td>
                <td>{Object.keys(mission.get('rewards').toJS()).map(reward => {
                  return (
                    <span>{determiningIcon(reward)}</span>
                  );
                })}</td>
                <td>{Object.keys(mission.get('losses').toJS()).map(loss => {
                  return (
                    <span>{determiningIcon(loss)}</span>
                  );
                })}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

DashboardMissionsList.propTypes = {
  missions: React.PropTypes.instanceOf(immutable.List)
};

export default DashboardMissionsList;
