/*
userState is function that augments req with userState property
we are adding new properties to userState here by assignment
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

    if (req.user)
      console.log('req.user is defined');

    if (!req.user)
      console.log('req.user is not defined');

    const acceptsLanguages = req.acceptsLanguages(config.appLocales);

    req.userState = {
      i18n: {
        locales: acceptsLanguages || config.defaultLocale
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
      countries: []
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
