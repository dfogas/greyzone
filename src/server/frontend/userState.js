/*
  userState is function that augments req with userState property
  we are adding new properties to userState here by assignment

  here should not go player state but the whole game state as
  game property
*/

import config from '../config';
import cconfig from '../../client/client.config';
import fetch from 'node-fetch';
fetch.Promise = require('bluebird');
import 'isomorphic-fetch';

/* Game inputs */
import AchievementList from '../lib/greyzone/achievement.list';
import CountryList from '../lib/greyzone/country.list';
import EnhancementList from '../lib/greyzone/enhancement.list';
import OptionsList from '../lib/greyzone/options.list';
import StatusList from '../lib/greyzone/status.list';

export default function userState() {

  return (req, res, next) => {

    const api = process.env.NODE_ENV === 'production' ?
      cconfig.dnsprod + '/api/v1/' :
      cconfig.dnsdevel + '/api/v1/';

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
        agentsforhire: [],
        constants: {
          agentsPriceList: {
            '1': 100,
            '2': 550,
            '3': 1000,
            '4': 5000,
            '5': 10000,
            '6': 50000,
            '7': 100000,
            '8': 500000,
            '9': 1000000,
            '10': 5500000,
            '11': 10000000,
            '12': 55000000
          },
          missionsPriceList: {
            '1': {cash: 0, contacts: 3},
            '2': {cash: 10, contacts: 3},
            '3': {cash: 100, contacts: 3},
            '4': {cash: 1000, contacts: 10},
            '5': {cash: 10000, contacts: 20}
          },
          started: 1452338437180
        },
        achievements: AchievementList,
        countries: CountryList,
        enhancements: EnhancementList,
        options: OptionsList,
        statuses: StatusList
      }
    };

    //TODO: api call to agentsforhire, need to set-up database first (probably) and controller&model also (surely)
    // also api call to missionstoaccept for the same reason as agents for hire

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
