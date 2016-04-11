import {register} from '../dispatcher';
import * as dashboardActions from './actions';
import * as authActions from '../auth/actions';
import {contestCursor, jsonapiCursor} from '../state';
import cconfig from '../client.config';
import immutable from 'immutable';
import dayandtime from '../lib/dayandtime';

export const dispatchToken = register(({action, data}) => {

  if (action === dashboardActions.acceptMission) {
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

  if (action === dashboardActions.bookMissionPrice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('gameContacts', val => val - data.message.get('contacts'))
        .update('gameCash', val => val - data.message.get('cash'));
    });

  if (action === dashboardActions.bookPrisonBreakMissionPrice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('gameContacts', val => val - data.message.get('contacts'))
        .update('gameCash', val => val - data.message.get('cash'));
    });

  if (action === dashboardActions.buyEnhancement) {
    const gameCash = jsonapiCursor(['gameCash']);
    const gameContacts = jsonapiCursor(['gameContacts']);
    if (gameCash >= data.message.price.cash && gameContacts >= data.message.price.contacts)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .update('enhancements', val => val.push(immutable.fromJS(data.message)))
          .update('gameCash', val => val - data.message.price.cash)
          .update('gameContacts', val => val - data.message.price.contacts)
          .update('log', val => val.unshift(
            dayandtime(Date.now(), new Date().getTimezoneOffset()) +
              ' - Enhancement ' + data.message.name + ' for your organization bought.'
          ));
      });
  }

  if (action === dashboardActions.buyStatus) {
    const gameCash = jsonapiCursor(['gameCash']);
    const gameContacts = jsonapiCursor(['gameContacts']);
    if (gameCash >= data.message.price.cash && gameContacts >= data.message.price.contacts)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .update('statuses', val => val.push(immutable.fromJS(data.message)))
          .update('gameCash', val => val - data.message.price.cash)
          .update('gameContacts', val => val - data.message.price.contacts);
      });
  }

  if (action === dashboardActions.changeMissionOption)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'strategical', 'missionaccept', 'form', 'fields', data.name], data.value);
    });

  if (action === dashboardActions.changeOption)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['options', data.name], data.value);
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
        .setIn(['dashboard', 'strategical', 'missionaccept', 'form', 'fields', 'tier'], null)
        .setIn(['dashboard', 'strategical', 'missionaccept', 'form', 'fields', 'focus'], 'random')
        .setIn(['dashboard', 'strategical', 'missionaccept', 'form', 'fields', 'country'], 'random');
    });

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

  if (action === dashboardActions.log) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.unshift(data));
    });
  }

  if (action === dashboardActions.logAgentsWindow) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'agentswindow', 'message'], data);
    });
  }

  if (action === dashboardActions.logMissionsWindow) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'missionswindow', 'message'], data);
    });
  }

  if (action === authActions.login)
    jsonapiCursor(() => {
      return immutable.fromJS(data);
    });

  if (action === dashboardActions.pointerChange)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'dashboard', 'index'], data.message);
    });

  if (action === dashboardActions.prisonBreakMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('missions', val => val.unshift(data.missionwETA));
    });

  if (action === dashboardActions.refreshStandings)
    contestCursor(() => {
      return immutable.fromJS(data);
    });

  if (action === dashboardActions.sanitizeAgents)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.filter(val => val !== null).filter(val => typeof val !== 'undefined'))
        .updateIn(['activemission', 'agentsonmission'], val => val.filter(val => val !== null).filter(val => typeof val !== 'undefined'));
    });

  if (action === dashboardActions.sanitizeMissions)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('missions', val => val.filter(val => val !== null).filter(val => typeof val !== 'undefined'));
    });

  if (action === dashboardActions.saveAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('agentbeingsaved', immutable.fromJS(data.agent))
        .update('agents', val => val.delete(val.indexOf(data.agent)));
    });

  if (action === dashboardActions.showTip)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['dashboard', 'strategical', data.destination, 'tip'], val => val === true ? val = false : val = true);
    });

  if (action === dashboardActions.updateFormField)
    jsonapiCursor(jsonapi => {
      const {context, name, value} = data;
      return jsonapi.setIn(['dashboard', 'strategical', context, 'form', 'fields', name], value);
    });

  if (action === dashboardActions.upgradeEnhancement) {
    const gameCash = jsonapiCursor(['gameCash']);
    const gameContacts = jsonapiCursor(['gameContacts']);
    if (gameCash >= data.enhancement.price.cash && gameContacts >= data.enhancement.price.contacts)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .update('enhancements', val => val.push(immutable.fromJS(data.enhancement)))
          .update('gameCash', val => val - data.enhancement.price.cash)
          .update('gameContacts', val => val - data.enhancement.price.contacts);
      });
  }

});
