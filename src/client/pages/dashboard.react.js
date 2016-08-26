import * as tutorialActions from '../tutorial/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import DocumentTitle from 'react-document-title';
import DashboardScreen from '../dashboard/dashboard.screen.react';
import DashboardToMission from '../navs/dashboardtomission.react';
import DashboardToTutorial from '../navs/dashboardtotutorial.react';
import MissionTalk from '../dashboard/missiontalk/mission.talk.react';
import requireAuth from '../auth/requireauth.react';
import {msg} from '../intl/store';

class Dashboard extends Component {

  render() {
    const {contest, game, jsonapi, locales, pendingActions, viewer} = this.props;
    const missionstarted = jsonapi.getIn(['activemission', 'started']);
    const tutorialfinished = jsonapi.getIn(['tutorial', 'completed']);

    return (
      <DocumentTitle title={msg('dashboard.title')}>
        <div className="dashboard-page">
          {!tutorialfinished &&
            <DashboardToTutorial />}
          {/*!tutorialfinished &&
            <button id='SkipIntroButton' onClick={(e) => tutorialActions.completeTutorial()}>Skip Intro</button>*/}
          {!missionstarted && tutorialfinished &&
            <DashboardScreen
              contest={contest}
              game={game}
              jsonapi={jsonapi}
              locales={locales}
              pendingActions={pendingActions}
              viewer={viewer}
              />}
          {missionstarted && tutorialfinished &&
            <div id='DashboardScreen'>
              <DashboardToMission />
              <MissionTalk
                game={game}
                jsonapi={jsonapi}
                />
            </div>}
        </div>
      </DocumentTitle>
    );
  }
}

Dashboard.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List).isRequired,
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  locales: React.PropTypes.string,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired,
  viewer: React.PropTypes.string
};

export default requireAuth(Dashboard);
