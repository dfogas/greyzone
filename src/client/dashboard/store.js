import {register} from '../dispatcher';
import * as dashboardActions from './actions';
import * as authActions from '../auth/actions';
import {jsonapiCursor} from '../state';

import immutable from 'immutable';
import randomInt from '../lib/getrandomint';
import CountryList from '../../server/lib/greyzone/country.list';

export const dispatchToken = register(({action, data}) => {

  if (action === dashboardActions.acceptMission) {
    const missiontoaccept = immutable.fromJS(data.message).set('inCountry', CountryList[randomInt(0, CountryList.length)]);
    const missions = jsonapiCursor(['missions']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('missions', missions.push(missiontoaccept));
    });
  }

  if (action === dashboardActions.bookAgentPrice)
    jsonapiCursor(jsonapi => {
      return jsonapi.update('gameCash', val => val + data.message);
    });

  if (action === dashboardActions.bookMissionPrice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('gameContacts', val => val - data.message.get('contacts'))
        .update('gameCash', val => val - data.message.get('cash'));
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

});
