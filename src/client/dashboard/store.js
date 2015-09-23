import {register} from '../dispatcher';
import * as actions from './actions';
import * as authActions from '../auth/actions';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import 'isomorphic-fetch';
import randomInt from '../lib/getrandomint';

export const dispatchToken = register(({action, data}) => {

  if (action === actions.acceptMission) {
    const countries = ['US', 'West Europe', 'Russia', 'SouthEast', 'China', 'Latin America'];
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['missiontoaccept'], data.message)
        .setIn(['missiontoaccept', 'inCountry'], countries[randomInt(0, countries.length)]);
    });
  }

  if (action === actions.confirmhire) {
    const agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agents'], agents.push(data))
        .setIn(['agentforhire'], null);
    });
  }


  if (action === actions.hire)
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['agentforhire'], data);
    });

  if (action === actions.confirmmissionaccept) {
    const missions = jsonapiCursor(['missions']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['missions'], missions.push(data))
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
        console.log('dashboard store says: this is your user: ', user);
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

});
