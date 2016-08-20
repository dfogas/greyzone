import './briefing.screen.styl';
// import * as briefingActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import DocumentTitle from 'react-document-title';
import immutable from 'immutable';
import {msg} from '../intl/store';
import formatMoney from '../lib/formatmoney';
import $ from 'jquery';

import AgentScrollBarWithNavButtons from '../agents/scrollbar/agentscrollbarwithnavbuttons.react';
import ActiveMission from './activemission/active.mission.react';
import ActiveMissionToggle from './activemission/active.mission.toggle.react';
import BriefingInCountry from './briefing.incountry.react';
import BriefingToDashboard from '../navs/briefingtodashboard.react';
import BriefingToArmory from '../navs/briefingtoarmory.react';
import DeskPlanToggle from './desk.plan.toggle.react';
import EventsOverview from './events.overview.react';
import MissionsListTable from './missionlist.table.react';
import MissionListToggle from './mission.list.toggle.react';
import MissionShiftLeft from './shift.left.react';
import MissionShiftRight from './shift.right.react';
import TaskHelpOverview from './taskhelp.overview.react';
import ToMission from '../navs/tomission.react';

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

  render() {
    const {game, jsonapi, pendingActions} = this.props;
    const agents = jsonapi.get('agents');
    // const briefingmessage = jsonapi.getIn(['briefing', 'message']);

    return (
      <DocumentTitle title={msg('briefing.title')}>
        <div id='BriefingScreen'>
          <div id='BriefingScreenLabel'>{msg('briefing.screen.label')}</div>
          {jsonapi.getIn(['components', 'briefing', 'activemission', 'toggle']) &&
            <ActiveMission
              activemission={jsonapi.get('activemission')}
              agents={agents}
              components={jsonapi.get('components')}
              game={game}
              jsonapi={jsonapi}
              />}
          <MissionShiftLeft
            activemission={jsonapi.get('activemission')}
            missions={jsonapi.get('missions')}
            />
          <MissionShiftRight
            activemission={jsonapi.get('activemission')}
            missions={jsonapi.get('missions')}
            />
          <BriefingInCountry
            jsonapi={jsonapi}
            />
          <BriefingToDashboard />
          <BriefingToArmory />
          <ActiveMissionToggle />
          <DeskPlanToggle />
          <MissionListToggle />
          {jsonapi.getIn(['components', 'briefing', 'missionlist']) &&
            <MissionsListTable
              activemission={jsonapi.get('activemission')}
              missions={jsonapi.get('missions')}
              />}
          {jsonapi.getIn(['components', 'briefing', 'taskhelp', 'toggle']) &&
            <TaskHelpOverview jsonapi={jsonapi} />}
          {jsonapi.getIn(['components', 'briefing', 'deskplan', 'toggle']) &&
            <EventsOverview jsonapi={jsonapi} />}
          {(jsonapi.getIn(['activemission', 'agentsonmission']).size ||
            jsonapi.getIn(['activemission', 'mission', 'currenttask', 'agentontask'])) &&
            <ToMission />}
          <AgentScrollBarWithNavButtons
            game={game}
            isAgents={true}
            isBriefing={true}
            isMission={false}
            jsonapi={jsonapi}
            pendingActions={pendingActions}
            />
          {/*<div id='BriefingLogMessage'>
            Message:  {briefingmessage}
          </div>*/}
          <div id='BriefingLiquidResources'>
            <span className='gameCash-counter'>
              Cash: {formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
            </span>
            <br />
            <span className='gameContacts-counter'>
              Contacts: {jsonapi.get('gameContacts')}
            </span>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

BriefingScreen.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default BriefingScreen;
