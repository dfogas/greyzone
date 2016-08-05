import './mission.screen.styl';
// import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import $ from 'jquery';

import TaskTier from './tasktier/tasktier.react';
import TableTopTier from './tabletoptier/tabletoptier.react';
import AgentsTier from './agentstier/agentstier.react';
import MissionScreenDarkener from './mission.screen.darkener.react';
import MissionResultsWindow from './results/window.react';
import MissionToBriefingButton from '../navs/missiontobriefing.react';
import MissionToDashboardButton from '../navs/missiontodashboard.react';

class MissionTrackingScreen extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => this.showHelpMessage(e));
    // setTimeout(() => {componentsActions.missionScreenTransition();}, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => this.showHelpMessage(e));
  }

  showHelpMessage(e) {
    if (e.keyCode === 72 && $('#MissionTutorial').html())
      $('#MissionTutorial').remove();
    else if (e.keyCode === 72)
      $('#MissionTrackingScreen').append(msg('tutorial.missionScreen'));
    //..
  }

  render() {
    const {game, jsonapi} = this.props;
    const missionStarted = jsonapi.getIn(['activemission', 'started']);
    const missionResult = jsonapi.getIn(['activemission', 'result']);
    const screenTrans = jsonapi.getIn(['components', 'mission', 'transition']);

    return (
      <div
        id='MissionTrackingScreen'
        style={{
          backgroundImage: `url(../../../assets/img/missions/thumbnails/${jsonapi.getIn(['activemission', 'imgsrc'])})`
        }}
        >
        <div id='MissionScreenLabel'>{msg('mission.screen.label')}</div>
        <TaskTier
          activemission={jsonapi.get('activemission')}
          />
        {screenTrans &&
          <TableTopTier
            activemission={jsonapi.get('activemission')}
            tutorial={jsonapi.get('tutorial')}
          />}
        <AgentsTier
          game={game}
          jsonapi={jsonapi}
          />
        <MissionScreenDarkener
          jsonapi={jsonapi}
          />
        {!missionStarted &&
          <MissionToBriefingButton />}
        {!missionStarted &&
          <MissionToDashboardButton />}
        {missionStarted && missionResult &&
          <MissionResultsWindow
            jsonapi={jsonapi}
            />}
      </div>
    );
  }
}
//
MissionTrackingScreen.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default MissionTrackingScreen;
