import {register} from '../dispatcher';
import * as dashboardActions from './actions';
import * as authActions from '../auth/actions';
import {jsonapiCursor} from '../state';
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
          ' - Mission ' + mission.title + ' in ' + mission.inCountry + ' accepted.'
        ));
    });
  }

  if (action === dashboardActions.bookMissionPrice) {
    const gameCash = jsonapiCursor(['gameCash']);
    const gameContacts = jsonapiCursor(['gameContacts']);
    if (gameCash >= data.message.get('cash') && gameContacts >= data.message.get('contacts'))
      jsonapiCursor(jsonapi => {
        return jsonapi
        .update('gameContacts', val => val - data.message.get('contacts'))
        .update('gameCash', val => val - data.message.get('cash'));
      });
  }

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

  if (action === dashboardActions.clearAgentHireFields)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'strategical', 'agenthire', 'form', 'fields', 'rank'], null)
        .setIn(['dashboard', 'strategical', 'agenthire', 'form', 'fields', 'specialist'], null);
    });

  if (action === dashboardActions.hireAgent) {
    const agents = jsonapiCursor(['agents']);
    const agent = data.agent;
    const gameCash = jsonapiCursor(['gameCash']);
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

  if (action === authActions.login) {
    const {email} = data;
    const api = process.env.NODE_ENV === 'production' ?
      cconfig.dnsprod + '/api/v1/' :
      cconfig.dnsdevel + '/api/v1/';

    fetch(api + 'users/')
      .then((response) => {
        if (response.status >= 400)
          throw new Error('Bad response from server.');
        return response.json();
      })
      .then((json) => {
        var user = json.filter(function(user) {
          return user.username === email;
        });
        return user[0];
      })
      .then((user) => {
        const {
          _id
        } = user;
        fetch(api + 'players/')
          .then((response) => {
            if (response.status >= 400)
              throw new Error('Bad response from server.');
            return response.json();
          })
          .then((json) => {
            var player = json.filter((player) => {
              return _id === player.userId;
            });
            return player[0];
          })
          .then((player) => {
            jsonapiCursor(jsonapi => {
              const newjsonapi = immutable.fromJS(player);
              jsonapi = newjsonapi;
              return jsonapi;
            });
          });
      });
  }

  if (action === dashboardActions.pointerChange)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'dashboard', 'index'], data.message);
    });

  if (action === dashboardActions.updateFormField)
    jsonapiCursor(jsonapi => {
      const {name, value} = data;
      return jsonapi.setIn(['dashboard', 'strategical', 'agenthire', 'form', 'fields', name], value);
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
