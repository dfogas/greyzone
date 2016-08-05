import {register} from '../dispatcher';
import * as dashboardActions from './actions';
import * as missionsWindowActions from './missionswindow/actions';
import {contestCursor, jsonapiCursor} from '../state';
import immutable from 'immutable';
import dayandtime from '../lib/dayandtime';
import bookObscurity from '../lib/bml/bookobscurity';

export const dispatchToken = register(({action, data}) => {

  if (action === dashboardActions.acceptMission || action === missionsWindowActions.acceptSpecifiedMission) {
    const mission = data.mission;
    jsonapiCursor(jsonapi => {
      return jsonapi
      .update('missions', val => val.push(immutable.fromJS(mission)))
      .update('log', val => val.unshift(
        dayandtime(Date.now(), new Date().getTimezoneOffset()) +
          ' - Mission ' + mission.title + ' in ' + mission.title + ' accepted.'
        ));
    });
  }

  if (action === dashboardActions.bookMissionPrice || action === missionsWindowActions.bookMissionPrice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('gameContacts', val => val - data.message.get('contacts'))
        .update('gameCash', val => val - data.message.get('cash'));
    });

  if (action === missionsWindowActions.bookPrisonBreakMissionPrice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('gameContacts', val => val - data.message.get('contacts'))
        .update('gameCash', val => val - data.message.get('cash'));
    });

  if (action === dashboardActions.changeCountry)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'countryofoperation'], data.value);
    });

  if (action === dashboardActions.changeMissionOption)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'strategical', 'missionaccept', 'form', 'fields', data.name], data.value);
    });

  if (action === dashboardActions.clearAgentHireFields)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'strategical', 'agenthire', 'form', 'fields', 'rank'], null)
        .setIn(['dashboard', 'strategical', 'agenthire', 'form', 'fields', 'specialist'], null);
    });

  if (action === dashboardActions.clearMissionAcceptFields)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'strategical', 'missionaccept', 'form', 'fields', 'focus'], 'random')
        .setIn(['dashboard', 'strategical', 'missionaccept', 'form', 'fields', 'country'], 'random');
    });

  if (action === dashboardActions.dashboardIntroToggle) {
    const toggle = jsonapiCursor(['dashboard', 'strategical', 'intro']);
    jsonapiCursor(jsonapi => {
      return jsonapi
      .setIn(['dashboard', 'strategical', 'intro'], !toggle);
    });
  }

  if (action === dashboardActions.hireAgent) {
    const agents = jsonapiCursor(['agents']);
    const agent = data.agent;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agents'], agents.push(immutable.fromJS(agent)))
        .update('gameCash', val => val - data.agentPrice)
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) +
          ' - ' + agent.specialist + ' ' + agent.name + ' with ' + agent.experience + 'XP recruited for $' + data.agentPrice + '.'
        ));
    });
  }

  if (action === dashboardActions.honorAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - ' +
          'Agent ' + data.agent.get('specialist') + ' ' + data.agent.get('name') + ' has been honored in her death.'
        ))
        .update('agents', val => val.delete(val.indexOf(data.agent)));
    });

  if (action === dashboardActions.log) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.unshift(data));
    });
  }

  if (action === dashboardActions.obscurityCountriesImpact) {
    let playerState = jsonapiCursor();
    const countrystats = jsonapiCursor(['countrystats']);
    // console.log(data.countries.toJS(), data.impact);
    data.countries.forEach(c => {
      let indexOfCS = countrystats.indexOf(countrystats.find(cs => cs.get('name') === c.get('name')));
      if (countrystats.map(cs => cs.get('name')).find(csname => csname === c.get('name')))
        playerState = playerState.setIn(['countrystats', indexOfCS, 'obscurity'], bookObscurity(countrystats.getIn([indexOfCS, 'obscurity']), data.impact));
    });
    jsonapiCursor(jsonapi => {
      return playerState;
    });
  }

  if (action === dashboardActions.playerDoesNotGoOnMissions)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('self', jsonapiCursor(['agents']).find(agent => agent.get('id') === jsonapiCursor(['self', 'id'])))
        .update('agents', val => val.delete(jsonapiCursor(['agents']).indexOf(jsonapiCursor(['agents']).find(agent => agent.get('id') === jsonapiCursor(['self', 'id'])))));
    });

  if (action === dashboardActions.playerGoesOnMissions)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.push(jsonapiCursor(['self'])));
    });

  if (action === dashboardActions.pointerChange)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'dashboard', 'index'], data.message);
    });

  if (action === dashboardActions.postponeRescue)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('agentbeingsaved', null)
        .update('agents', val => val.push(data.agent));
    });

  if (action === dashboardActions.refreshStandings)
    contestCursor(() => {
      return immutable.fromJS(data);
    });

  if (action === dashboardActions.saveAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('agentbeingsaved', immutable.fromJS(data.agent))
        .update('agents', val => val.delete(val.indexOf(data.agent)));
    });

  if (action === dashboardActions.selectAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'agentondisplay'], data.agent);
    });

  if (action === dashboardActions.selectAgentOnDisplay)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'agentondisplay'], data.agent);
    });

  if (action === dashboardActions.updateFormField)
    jsonapiCursor(jsonapi => {
      const {context, name, value} = data;
      return jsonapi.setIn(['dashboard', 'strategical', context, 'form', 'fields', name], value);
    });

  if (action === dashboardActions.upgradeEnhancement) {
    const price = data.enhancement.get('price');
    jsonapiCursor(jsonapi => {
      return jsonapi
      .update('enhancements', val => val.push(data.enhancement))
      .update('gameCash', val => val - price.get('cash'))
      .update('gameContacts', val => val - price.get('contacts'));
    });
  }

});
