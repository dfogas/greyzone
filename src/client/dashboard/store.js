import {register} from '../dispatcher';
import * as dashboardActions from './actions';
import * as authActions from '../auth/actions';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  if (action === dashboardActions.acceptMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('missions', val => val.push(immutable.fromJS(data.message)));
    });

  if (action === dashboardActions.bookAgentPrice) {
    const gameCash = jsonapiCursor(['gameCash']);
    if (gameCash >= data.message)
      jsonapiCursor(jsonapi => {
        return jsonapi.update('gameCash', val => val - data.message);
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
          .update('gameContacts', val => val - data.message.price.contacts);
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
    console.log('agent recruited: ' + data.agent.name);
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['agents'], agents.push(immutable.fromJS(data.agent)));
    });
  }

  if (action === dashboardActions.hidePlayersWindow)
    console.log('If hidden, then show. If visible, then hide.');

  if (action === authActions.login) {
    const {email} = data;
    const api = process.env.NODE_ENV === 'production' ?
      'http://fierce-shore-7346.herokuapp.com/api/v1/' :
      'http://localhost:8000/api/v1/';

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

  if (action === dashboardActions.newUserAppendState) {
    const api = process.env.NODE_ENV === 'production' ?
      'http://fierce-shore-7346.herokuapp.com/api/v1/' :
      'http://localhost:8000/api/v1/';

    // console.log('Username: ' + data.email + 'UserId: ' + data.userId);
    fetch(api + 'players', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({userId: data.userId, name: data.organization})
    });
  }

  if (action === dashboardActions.pointerChange)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['componentsstates', 'dashboard', 'index'], data.message);
    });

  if (action === dashboardActions.updateFormField)
    jsonapiCursor(jsonapi => {
      const {name, value} = data;
      return jsonapi.setIn(['dashboard', 'strategical', 'agenthire', 'form', 'fields', name], value);
    });

  if (action === dashboardActions. upgradeEnhancement) {
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
