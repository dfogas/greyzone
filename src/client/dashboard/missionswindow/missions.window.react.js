/* Smart Component */
import './missions.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import MissionAcceptForm from './missionaccept.form.react';
import MercuryNetwork from './mercury.network.react';
import DashboardMissionsList from './dashboard.missions.list.react';

class MissionsWindow extends Component {
  agentMission() {
    dashboardActions.agentRecruitMission();
  }

  bankMission() {
    dashboardActions.bankRobberyMission();
  }

  prisonBreakMission() {
    const {agentbeingsaved, missions} = this.props;
    const missionstitles = missions.map(mission => mission.get('title'));
    if (missionstitles.indexOf('Prison Break') === -1) {
      dashboardActions.prisonBreakMission();
      dashboardActions.bookPrisonBreakMissionPrice(agentbeingsaved);
    } else
    dashboardActions.logMissionsWindow({message: 'Prison Break mission already in place, finish it first.'});
  }

  render() {
    const {agentbeingsaved, enhancements, jsonapi, missions, missionspricelist} = this.props;
    // const capabilityEnhancements = enhancements.filter(enhancement => enhancement.get('type') === 'capability');
    const missionaccept = jsonapi.get('dashboard').getIn(['strategical', 'missionaccept']);
    const canhasbank = enhancements.find(enh => enh.get('name') === 'Nostalgia');

    return (
      <div id='MissionsWindow'>
        {/*<MissionAcceptForm
          enhancements={enhancements}
          missionaccept={missionaccept}
          missions={missions}
          missionspricelist={missionspricelist}
          />*/}
        <MercuryNetwork />
        {agentbeingsaved &&
          <div id="PrisonBreakMission">
            <button
              id='PrisonBreakMissionButton'
              onClick={this.prisonBreakMission.bind(this)}>{msg('dashboard.strategical.special.prisonbreak.button')}</button>
            {agentbeingsaved.get('rank') * 1000 + '\u{1f4b0}'}
            {agentbeingsaved.get('rank') * 10 + '\u{1f575}'}
          </div>}
        {missions.size !== 0 &&
          <DashboardMissionsList
            missions={missions}
            />}
        <button
          id='RecruitAgentButton'
          onClick={this.agentMission}>Search For Agent</button>
        {canhasbank &&
          <button
            id='RobBankButton'
            onClick={this.bankMission}>Do the bank</button>}
      </div>
    );
  }

}

MissionsWindow.propTypes = {
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  enhancements: React.PropTypes.instanceOf(immutable.List),
  missions: React.PropTypes.instanceOf(immutable.List),
  missionspricelist: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionsWindow;
