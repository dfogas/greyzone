import './briefing.styl';
import * as missionActions from '../mission/actions';
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

class BriefingScreen extends Component {
  selectMission(e) {
    e.preventDefault();

    const targetParentNode = e.target.parentNode;
    const title = targetParentNode.childNodes[0].innerHTML;
    const inCountry = targetParentNode.childNodes[1].innerHTML;
    const tier = parseInt(targetParentNode.childNodes[2].innerHTML, 10);

    console.log('Mission ' + title + ' in ' + inCountry + ' Tier ' + tier);
    missionActions.select(title, inCountry, tier);
  }

  render() {
    const {jsonapi, pendingActions} = this.props;
    const agents = jsonapi.get('agents');
    const missions = jsonapi.get('missions');

    const missionlist = missions.map(mission => {
      return (
        <tbody>
          <tr
            onClick={(e) => this.selectMission(e)}
            >
            <td>{mission.get('title')}</td>
            <td>{mission.get('inCountry')}</td>
            <td>{mission.get('tier')}</td>
          </tr>
        </tbody>
      );
    });

    return (
      <DocumentTitle title={msg('briefing.title')}>
        <div id='BriefingScreen'>
          <ActiveMission
            activemission={jsonapi.get('activemission')}
            agents={agents}
            />
          <div id='BriefingMissionShiftRight'></div>
          <div id='BriefingMissionShiftLeft'></div>
          <BriefingToDashboard />
          <BriefingToArmory />
          <ToMission />
          <div id='MissionsListTable'>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Region</th>
                  <th>Tier</th>
                </tr>
              </thead>
              {missionlist}
            </table>
          </div>
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
