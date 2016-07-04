/*
  userState is function that augments req with userState property
  we are adding new properties to userState here by assignment

  here should not go player state but the whole game state as
  game property

  fetch calls are possible, though, I have a suspicion that
  they slow down loading of the page
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
import EquipmentList from '../lib/greyzone/equipments.list';
import MissionsList from '../lib/greyzone/missions.list';
import OptionsList from '../lib/greyzone/options.list';
import StatusList from '../lib/greyzone/statuses.list';
import TrainingTable from '../lib/greyzone/trainingtable';

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
        achievements: AchievementList,
        agentsforhire: [],
        constants: {
          agentsPriceList: {
            '1': 100,
            '2': 550,
            '3': 1000,
            '4': 5000,
            '5': 10000,
            '6': 50000
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
        countries: CountryList,
        enhancements: EnhancementList,
        equipments: EquipmentList,
        missions: MissionsList,
        options: OptionsList,
        features: {
          paid: {
            equipments: {
              ETAdelay: 60 * 5 * 1000
            }
          },
          unpaid: {
            equipments: {
              ETAdelay: 60 * 10 * 1000
            }
          }
        },
        statuses: StatusList,
        trainingtable: TrainingTable
      }
    };

    req.userState.jsonapi = {
      name: 'Default',
      title: 'DefaultTitle',
      gameCash: 0,
      gameContacts: 0,
      components: {
        login: {
          bigscreen: true,
          devnotice: false
        }
      },
      missions: [],
      agents: [],
      equipments: [],
      countrystats: []
    };

    fetch(api + 'contest/')
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
