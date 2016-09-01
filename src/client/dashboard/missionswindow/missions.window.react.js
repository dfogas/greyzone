/* Smart Component */
import './missions.window.styl';
import * as commandActions from '../../command/actions';
import * as dashboardActions from '../actions';
import * as missionsWindowActions from './actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import MissionAcceptForm from './missionaccept.form.react';
import MercuryNetwork from './mercury.network.react';
import DashboardMissionsList from './dashboard.missions.list.react';
import CountryOfOperation from './country.of.operation.react';

class MissionsWindow extends Component {
  agentMission() {
    missionsWindowActions.agentRecruitMission();
  }

  bankMission() {
    missionsWindowActions.bankRobberyMission();
  }

  destroyEvidenceMission() {
    missionsWindowActions.destroyEvidenceMission();
  }

  innerCircleMission() {
    missionsWindowActions.innerCircleMission();
  }

  oldDebtMission() {
    missionsWindowActions.oldDebtMission();
  }

  prisonBreakMission() {
    const {agentbeingsaved, missions} = this.props;
    const missionstitles = missions.map(mission => mission.get('title'));
    if (missionstitles.indexOf('Prison Break') === -1) {
      commandActions.loadMissions();
      missionsWindowActions.prisonBreakMission(agentbeingsaved);
      missionsWindowActions.bookPrisonBreakMissionPrice(agentbeingsaved);
    } else dashboardActions.flashDashboard('Prison Break mission already in place.');
  }

  silenceWitnessMission() {
    missionsWindowActions.silenceWitnessMission();
  }

  render() {
    const {agentbeingsaved, enhancements, game, jsonapi, missions, missionspricelist} = this.props;

    const debug = jsonapi.getIn(['options', 'debug']);

    return (
      <div id='MissionsWindow'>
        <button
          id='RecruitAgentButton'
          onClick={this.agentMission}>Find Agent</button>
        {!debug && <CountryOfOperation
          game={game}
          jsonapi={jsonapi}
          />}
        {!debug &&
          <MercuryNetwork />}
        {debug &&
          <MissionAcceptForm
            enhancements={enhancements}
            missionaccept={jsonapi.get('dashboard').getIn(['strategical', 'missionaccept'])}
            missions={missions}
            missionspricelist={missionspricelist}
          />}
        {agentbeingsaved &&
          <div id="PrisonBreakMission">
            <button
              id='PrisonBreakMissionButton'
              onClick={this.prisonBreakMission.bind(this)}
              >{msg('dashboard.strategical.special.prisonbreak.button')}<br />
              <span className='prisonbreak-mission-cost'>{'\u{1f4b0}' + agentbeingsaved.get('rank') * 1000}</span>
              <span className='prisonbreak-mission-cost'>{'\u{1f575}' + agentbeingsaved.get('rank') * 10}</span>
            </button>
          </div>}
        {missions.size !== 0 &&
          <DashboardMissionsList
            missions={missions}
            />}
        {enhancements.find(enh => enh.get('name') === 'Nostalgia') &&
          <button
            id='RobBankButton'
            onClick={this.bankMission}>Do the bank</button>}
        {enhancements.find(enh => enh.get('name') === 'Side Quest') &&
          <button
            id='OldDebtButton'
            onClick={this.oldDebtMission}>Pay Old debt</button>}
        {enhancements.find(enh => enh.get('name') === 'You can\'t see me') &&
          <button
            id='PurgeEvidenceButton'
            onClick={this.destroyEvidenceMission}>Purge Evidence</button>}
        {enhancements.find(enh => enh.get('name') === 'Repaying the favor') &&
          <button
            id='SilenceRatButton'
            onClick={this.silenceWitnessMission}>Silence Witness</button>}
        {enhancements.find(enh => enh.get('name') === 'Gala in Opera house') &&
          <button
            id='InnerCircleButton'
            onClick={this.innerCircleMission}>Inner Circle</button>}
      </div>
    );
  }

}

MissionsWindow.propTypes = {
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  enhancements: React.PropTypes.instanceOf(immutable.List),
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  missions: React.PropTypes.instanceOf(immutable.List),
  missionspricelist: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionsWindow;
