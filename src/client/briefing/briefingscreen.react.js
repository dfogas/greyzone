import './briefingscreen.styl';
import Component from '../components/component.react';
import React from 'react';
import DocumentTitle from 'react-document-title';
import immutable from 'immutable';
import {msg} from '../intl/store';

import AgentScrollBarWithNavButtons from '../agents/scrollbar/agentscrollbarwithnavbuttons.react';
import ActiveMission from './activemission/activemission.react';
import BriefingInCountry from './briefing.incountry.react';
import BriefingToDashboard from '../navs/briefingtodashboard.react';
import BriefingToArmory from '../navs/briefingtoarmory.react';
import MissionsListTable from './missionlist.table.react';
import ToMission from '../navs/tomission.react';

class BriefingScreen extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;
    const agents = jsonapi.get('agents');
    const briefingmessage = jsonapi.getIn(['briefing', 'message']);

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
          <BriefingInCountry
            inCountry={jsonapi.getIn(['activemission', 'inCountry'])}
            />
          <BriefingToDashboard />
          <BriefingToArmory />
          {jsonapi.getIn(['activemission', 'agentsonmission']).size &&
            <ToMission />}
          <AgentScrollBarWithNavButtons
            isAgents={true}
            isBriefing={true}
            isMission={false}
            jsonapi={jsonapi}
            pendingActions={pendingActions}
            />
          <div id='BriefingMessage'>
            Message: {briefingmessage}
          </div>
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
