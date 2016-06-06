import './briefingscreen.styl';
import * as briefingActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import DocumentTitle from 'react-document-title';
import immutable from 'immutable';
import {msg} from '../intl/store';
import $ from 'jquery';

import AgentScrollBarWithNavButtons from '../agents/scrollbar/agentscrollbarwithnavbuttons.react';
import ActiveMission from './activemission/activemission.react';
import BriefingInCountry from './briefing.incountry.react';
import BriefingToDashboard from '../navs/briefingtodashboard.react';
import BriefingToArmory from '../navs/briefingtoarmory.react';
import MissionsListTable from './missionlist.table.react';
import ToMission from '../navs/tomission.react';
import MissionShiftLeft from './shift.left.react';
import MissionShiftRight from './shift.right.react';

class BriefingScreen extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => this.showHelpMessage(e));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => this.showHelpMessage(e));
  }

  showHelpMessage(e) {
    if (e.keyCode === 72 && $('#BriefingTutorial').html())
      $('#BriefingTutorial').remove(); //
    else if (e.keyCode === 72)
      $('#BriefingScreen').append(msg('tutorial.briefingScreen'));
  }

  pushGameMission(mission) {
    // puts game pushed mission on top of mission list
    briefingActions.pushGameMission(mission);
  }

  render() {
    const {jsonapi, pendingActions} = this.props;
    const agents = jsonapi.get('agents');
    const briefingmessage = jsonapi.getIn(['briefing', 'message']);

    socket.on('new mission', (gamemission) => { // eslint-disable-line no-undef
      const countrystats = jsonapi.get('countrystats');
      const countrystat = jsonapi.getIn(['countrystats', countrystats.indexOf(countrystats.find(countrystat => countrystat.get('name') === gamemission.inCountry))]);
      console.log('checking for obscurity save');
      if (Math.random() < (1 / 1 + countrystat.get(['obscurity'])) && gamemission.title === 'Discovered!')
        this.pushGameMission(gamemission);
      else if (gamemission.title !== 'Discovered!')
        this.pushGameMission(gamemission);
      else
        console.log('saved by obscurity');
    });

    return (
      <DocumentTitle title={msg('briefing.title')}>
        <div id='BriefingScreen'>
          <div id='BriefingScreenLabel'>{msg('briefing.screen.label')}</div>
          <ActiveMission
            activemission={jsonapi.get('activemission')}
            agents={agents}
            />
          <MissionShiftLeft
            activemission={jsonapi.get('activemission')}
            missions={jsonapi.get('missions')}
            />
          <MissionShiftRight
            activemission={jsonapi.get('activemission')}
            missions={jsonapi.get('missions')}
            />
          /*TODO: Add shifts */
          <MissionsListTable
            activemission={jsonapi.get('activemission')}
            missions={jsonapi.get('missions')}
            />
          <BriefingInCountry
            inCountry={jsonapi.getIn(['activemission', 'inCountry'])}
            />
          <BriefingToDashboard />
          <BriefingToArmory />
          {(jsonapi.getIn(['activemission', 'agentsonmission']).size ||
            jsonapi.getIn(['activemission', 'mission', 'currenttask', 'agentontask'])) &&
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
