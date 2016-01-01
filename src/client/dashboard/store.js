import {register} from '../dispatcher';
import * as dashboardActions from './actions';
import * as authActions from '../auth/actions';
import {jsonapiCursor} from '../state';

import immutable from 'immutable';

import randomInt from '../lib/getrandomint';
// import playerdefaults from '../lib/playerdefaults';

export const dispatchToken = register(({action, data}) => {

  if (action === dashboardActions.acceptMission) {
    const countries = ['US', 'West Europe', 'Russia', 'SouthEast', 'China', 'Latin America'];
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['missiontoaccept'], data.message)
        .setIn(['missiontoaccept', 'inCountry'], countries[randomInt(0, countries.length)]);
    });
  }

  if (action === dashboardActions.buyContacts)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('gameCash', val => val - 1000)
        .update('gameContacts', val => val + 10);
    });

  if (action === dashboardActions.confirmhire) {
    const agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agents'], agents.push(data.agent))
        .updateIn(['gameCash'], val => val - data.price)
        .setIn(['agentforhire'], null);
    });
  }


  if (action === dashboardActions.hire)
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['agentforhire'], data);
    });

  if (action === dashboardActions.confirmmissionaccept) {
    const missions = jsonapiCursor(['missions']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['missions'], missions.push(data.mission))
        .updateIn(['gameCash'], val => val - data.cost[0])
        .updateIn(['gameContacts'], val => val - data.cost[1])
        .setIn(['missiontoaccept'], null);
    });
  }

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

});
