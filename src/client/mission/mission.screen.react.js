import './mission.screen.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import missionBoxShadow from '../lib/bml/missionboxshadow';
import Sound from '../lib/sound';
import cconfig from '../client.config';

import TaskTier from './tasktier/tasktier.react';
import TableTopTier from './tabletoptier/tabletoptier.react';
import AgentsTier from './agentstier/agentstier.react';
import MissionScreenDarkener from './mission.screen.darkener.react';
import MissionResultsWindow from './results/window.react';
import MissionToBriefingButton from '../navs/missiontobriefing.react';
import MissionToDashboardButton from '../navs/missiontodashboard.react';
import ScreenHelp from '../tutorial/screen.help.react';

class MissionTrackingScreen extends Component {
  componentDidMount() {
    const {jsonapi} = this.props;
    const mission = jsonapi.get('activemission');
    const url = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;
    window.addEventListener('keydown', this.helpMessage);
    if (jsonapi.getIn(['options', 'soundeffects'])) {
      let missionSound = new Sound(url + '/assets/audio/' + mission.get('sound'));
      missionSound.play();
    }
    // setTimeout(() => {componentsActions.missionScreenTransition();}, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.helpMessage);
  }

  helpMessage(e) {
    if (e.keyCode === 72)
      componentsActions.screenHelpToggle('mission');
  }

  render() {
    const {game, jsonapi} = this.props;
    const countryofoperation = jsonapi.getIn(['dashboard', 'countryofoperation']);
    const isPlaceholder = jsonapi.getIn(['activemission', 'title']) === 'Quiet before the Storm';
    const missionStarted = jsonapi.getIn(['activemission', 'started']);
    const missionResult = jsonapi.getIn(['activemission', 'result']);
    const screenTrans = jsonapi.getIn(['components', 'mission', 'transition']);
    const tutorial = jsonapi.getIn(['options', 'tutorial']);
    // {msg('mission.screen.label')}

    return (
      <div
        id='MissionTrackingScreen'
        style={isPlaceholder ? {} : {
          backgroundImage: `url(../../../assets/img/missions/thumbnails/${jsonapi.getIn(['activemission', 'imgsrc'])})`,
          boxShadow: missionBoxShadow(jsonapi.get('activemission'))
        }}>
        <div id='MissionScreenLabel'>Mission in {countryofoperation}</div>
        <MissionScreenDarkener
          jsonapi={jsonapi}
          />
        {jsonapi.getIn(['components', 'screenhelp', 'mission']) &&
          <ScreenHelp context='mission' />}
        {screenTrans &&
          <TaskTier
            game={game}
            jsonapi={jsonapi}
            />}
        {screenTrans &&
          <TableTopTier
            jsonapi={jsonapi}
            />}
        {screenTrans &&
          <AgentsTier
            game={game}
            jsonapi={jsonapi}
            />}
        {!missionStarted &&
          <MissionToBriefingButton />}
        {!missionStarted &&
          <MissionToDashboardButton />}
        {missionStarted && missionResult &&
          <MissionResultsWindow
            game={game}
            jsonapi={jsonapi}
            />}
        {tutorial && <div className='player-help-hint-mission-screen'>
          Click/drag&drop items to interact
          <br />
          Press 'h' for help
        </div>}
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
