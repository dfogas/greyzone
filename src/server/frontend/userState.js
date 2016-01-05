/*
  userState is function that augments req with userState property
  we are adding new properties to userState here by assignment

  here should not go player state but the whole game state as
  game property
*/

import config from '../config';
import fetch from 'node-fetch';
fetch.Promise = require('bluebird');
import 'isomorphic-fetch';

export default function userState() {

  return (req, res, next) => {

    const api = process.env.NODE_ENV === 'production' ?
      'http://fierce-shore-7346.herokuapp.com/api/v1/' :
      'http://localhost:8000/api/v1/';

    const acceptsLanguages = req.acceptsLanguages(config.appLocales);

    req.userState = {
      i18n: {
        locales: acceptsLanguages || config.defaultLocale
      }
    };

    req.userState.game = {
      events: [
        {name: 'Event no. 1', target: 'target_id'}
      ],
      globals: {
        constants: [{name: 'Global Constant no. 1', value: null}],
        countries: [
          {name: 'US', agentsforhire: [], missionstoaccept: []},
          {name: 'West Europe', agentsforhire: [], missionstoaccept: []},
          {name: 'Russia', agentsforhire: [], missionstoaccept: []},
          {name: 'Arabia', agentsforhire: [], missionstoaccept: []},
          {name: 'SouthEast', agentsforhire: [], missionstoaccept: []},
          {name: 'Latin America', agentsforhire: [], missionstoaccept: []}
        ]
      }
    };

    req.userState.jsonapi = {
      name: 'Default',
      title: 'DefaultTitle',
      gameCash: 0,
      gameContacts: 0,
      missions: [],
      agents: [],
      equipments: [],
      countrystats: []
    };

    fetch(api + 'players/')
      .then((response) => {
        if (response.status >= 400)
          throw new Error('Bad server response.');
        return response.json();
      })
      .then((json) => {
        req.userState.contest = json;
      })
      .then(() => {
        next();
      });

  };

}
