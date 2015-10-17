import './briefing.css';
import Component from '../components/component.react';
import React from 'react';
import DocumentTitle from 'react-document-title';
import immutable from 'immutable';
import {msg} from '../intl/store';

import AgentScrollBarWithNavButtons from '../agents/scrollbar/agentscrollbarwithnavbuttons.react';
import ActiveMission from './activemission/activemission.react';
import SpecialMissionsLayout from './specialmissionslayout/specialmissionslayout.react';
import MissionsLayout from './missionslayout/missionslayout.react';

class BriefingScreen extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;
    const activemission = jsonapi.get('activemission');
    const agents = jsonapi.get('agents');
    const missions = jsonapi.get('missions');
    const commonmissions = immutable.Seq(missions.toJS()).filterNot(mission => mission.special === true).toList();
    const specialmissions = immutable.Seq(missions.toJS()).filter(mission => mission.special === true).toList();

    return (
      <DocumentTitle title={msg('briefing.title')}>
        <div id='BriefingScreen'>
          <SpecialMissionsLayout
            specialmissions={specialmissions}
            />
          <ActiveMission
            activemission={activemission}
            agents={agents}
            />
          <MissionsLayout
            isBriefing={true}
            missions={commonmissions}
            />
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
