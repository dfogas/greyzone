import './missionscreen.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import TaskTier from './tasktier/tasktier.react';
import TableTopTier from './tabletoptier/tabletoptier.react';
import AgentsTier from './agentstier/agentstier.react';
import MissionResultsWindow from './results/window.react';
import MissionToBriefingButton from '../navs/missiontobriefing.react';
import MissionToDashboardButton from '../navs/missiontodashboard.react';

class MissionTrackingScreen extends Component {
  render() {
    const {jsonapi} = this.props;
    const missionStarted = jsonapi.getIn(['activemission', 'started']);
    const missionResult = jsonapi.getIn(['activemission', 'result']);

    return (
      <div id='MissionTrackingScreen'>
        <TaskTier
          activemission={jsonapi.get('activemission')}
          />
        <TableTopTier
          activemission={jsonapi.get('activemission')}
          />
        <AgentsTier
          jsonapi={jsonapi}
          />
        {!missionStarted &&
          <MissionToBriefingButton />}
        {!missionStarted &&
          <MissionToDashboardButton />}
        {missionStarted && missionResult &&
          <MissionResultsWindow />}
      </div>
    );
  }
}

MissionTrackingScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default MissionTrackingScreen;
