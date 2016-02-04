import './briefing.styl';
import Component from '../components/component.react';
import React from 'react';
import DocumentTitle from 'react-document-title';
import immutable from 'immutable';
import {msg} from '../intl/store';

import AgentScrollBarWithNavButtons from '../agents/scrollbar/agentscrollbarwithnavbuttons.react';
import ActiveMission from './activemission/activemission.react';
import ToMission from '../navs/tomission.react';
import BriefingToDashboard from '../navs/briefingtodashboard.react';
import BriefingToArmory from '../navs/briefingtoarmory.react';
import MissionsListTable from './missionlist.table.react';

class BriefingScreen extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;
    const agents = jsonapi.get('agents');

    return (
      <DocumentTitle title={msg('briefing.title')}>
        <div id='BriefingScreen'>
          <ActiveMission
            activemission={jsonapi.get('activemission')}
            agents={agents}
            />
          <div id='BriefingMissionShiftRight'></div>
          <div id='BriefingMissionShiftLeft'></div>
          <MissionsListTable
            missions={jsonapi.get('missions')}
            />
          <BriefingToDashboard />
          <BriefingToArmory />
          <ToMission />
          <AgentScrollBarWithNavButtons
            agents={agents}
            isBriefing={true}
            jsonapi={jsonapi}
            pendingActions={pendingActions}
            />
        </div>
      </DocumentTitle>
    );
  }
}

BriefingScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default BriefingScreen;
