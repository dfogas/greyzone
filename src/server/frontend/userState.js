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
import eventsList from '../lib/greyzone/events/events.list';
import fetch from 'node-fetch';
fetch.Promise = require('bluebird');
import 'isomorphic-fetch';
import gameState from './gameState';

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

    req.userState.game = gameState;

    req.userState.jsonapi = {
      name: 'Default',
      title: 'DefaultTitle',
      agents: [],
      armory: {},
      components: {
        login: {
          bigscreen: {
          },
          devnotice: false
        }
      },
      countrystats: [],
      enhancements: [],
      equipments: [],
      events: eventsList,
      gameCash: 0,
      gameContacts: 0,
      missions: [],
      tutorial: {
        playerhistory: {
          slides: [
            `You barely remember the start of story. It was a hot summer and you were recuited by some obscure character.`,
            `You clearly remember the start, it had been intense, you were thrown out to wolves.`,
            `Making it through initial trials you established level of confidence that helped you rise in the rank.`,
            `You were left for dead after one action, considered KIA but you survived and - you shouldn't.`,
            `Contacting your former companion, you kept yourself hiding, but time has come for risk.`,
            `Monitoring the communication channels, it has come to your attention that there is a hunt on certain criminal going on.`,
            `You decided to help her ...`
          ]
        }
      },
      savegames: [],
      talk: {
        participants: []
      }
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
