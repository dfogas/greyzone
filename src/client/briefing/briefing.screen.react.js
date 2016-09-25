import './briefing.screen.styl'; //
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import DocumentTitle from 'react-document-title';
import immutable from 'immutable';
import {msg} from '../intl/store';
// import formatMoney from '../lib/formatmoney';

import AgentScrollBarWithNavButtons from '../agents/scrollbar/agentscrollbarwithnavbuttons.react';
import ActiveMission from './activemission/active.mission.react';
import ActiveMissionToggle from './activemission/active.mission.toggle.react';
// import BriefingInCountry from './briefing.incountry.react';
import BriefingToDashboard from '../navs/briefingtodashboard.react';
import BriefingToArmory from '../navs/briefingtoarmory.react';
import CountryOfOperation from './country.of.operation.react';
import DeskPlanToggle from './desk.plan.toggle.react';
import MissionsListTable from './missionlist.table.react';
import MissionListToggle from './mission.list.toggle.react';
import MissionShiftLeft from './shift.left.react';
import MissionShiftRight from './shift.right.react';
import ScreenPlastic from '../tutorial/screen.plastic.react';
import ScreenHelp from '../tutorial/screen.help.react';
import ToMission from '../navs/tomission.react';
import TravelWindow from './travelwindow/travel.window.react';

class BriefingScreen extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.helpMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.helpMessage);
  }

  helpMessage(e) {
    if (e.keyCode === 72)
      componentsActions.screenHelpToggle('briefing');
  }

  render() {
    const {game, jsonapi, pendingActions} = this.props;

    return (
      <DocumentTitle title={msg('briefing.title')}>
        <div id='BriefingScreen'>
          <div id='BriefingScreenLabel'>{msg('briefing.screen.label')}</div>
          {jsonapi.getIn(['components', 'screenhelp', 'briefing']) &&
            <ScreenHelp context='briefing' />}
          {jsonapi.getIn(['briefing', 'screenplastic', 'toggle']) &&
            <ScreenPlastic />}
          {jsonapi.getIn(['components', 'briefing', 'travelselection', 'toggle']) &&
            <CountryOfOperation
              game={game}
              jsonapi={jsonapi}
              />}
          {jsonapi.getIn(['dashboard', 'progressbar', 'toggle']) &&
            <TravelWindow dashboard={jsonapi.get('dashboard')} />}
          {jsonapi.getIn(['components', 'briefing', 'activemission', 'toggle']) &&
            <ActiveMission
              activemission={jsonapi.get('activemission')}
              components={jsonapi.get('components')}
              game={game}
              jsonapi={jsonapi}
              />}
          {jsonapi.getIn(['components', 'briefing', 'activemission', 'toggle']) &&
            <MissionShiftLeft
              activemission={jsonapi.get('activemission')}
              missions={jsonapi.get('missions')}
              />}
          {jsonapi.getIn(['components', 'briefing', 'activemission', 'toggle']) &&
            <MissionShiftRight
              activemission={jsonapi.get('activemission')}
              missions={jsonapi.get('missions')}
              />}
          {!jsonapi.getIn(['activemission', 'agentsonmission']).size && <BriefingToDashboard />}
          <BriefingToArmory />
          <ActiveMissionToggle />
          <DeskPlanToggle />
          <MissionListToggle />
          {jsonapi.getIn(['components', 'briefing', 'missionlist']) &&
            <MissionsListTable
              jsonapi={jsonapi}
              />}
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
          {/*<div id='BriefingLiquidResources'>
            <span className='gameCash-counter'>
              Cash: {formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
            </span>
            <br />
            <span className='gameContacts-counter'>
              Contacts: {jsonapi.get('gameContacts')}
            </span>
          </div>*/}
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
