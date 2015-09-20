// /*
// action will pass rewards or losses object
// that is not important only for the sign
// so only object keys are relevant
// */
//
// import jsonapiCursor from '../../state';
//
// const resultkeys;
//
// resultkeys = results.map(result => result[key], []);
//
// // or better
//
// resultkeys = Object.keys(results);
//
// // when I have resultkeys
//
// // no action check
// if (resultkeys === Array(0));
//   return ;
//
// if (resultkeys.find(key => key === 'gameCash'))
//   jsonapiCursor(jsonapi => {
//     return jsonapi.set('gameCash', results.gameCash)
//   });.
//
// if (resultkeys.find(key => key === 'gameContacts'))
//   jsonapiCursor(jsonapi => {
//     return jsonapi.set('gameContacts', results.gameContacts)
//   });
//
// if (resultkeys.find(key => key === 'reputation'))
//   const countryname = jsonapiCursor(['countries', activemissioncountryname]);
//   jsonapiCursor(jsonapi => {
//     return jsonapi.updateIn(['countries', countries.indexOf(countryname), 'reputation' ], updater);
//   });
//
// if (resultkeys.find(key => key === 'obscurity'))
//   const countryname = jsonapiCursor(['countries', activemissioncountryname]);
//   jsonapiCursor(jsonapi => {
//     return jsonapi.updateIn(['countries', countries.indexOf(countryname), 'obscurity'], updater());
//   });
//
// // with basics handled out let's go to agent killing and imprisonment
//
// if (resultkeys.find(key => key === 'agentImprisoned'))
//   jsonapiCursor(jsonapi => {
//     return jsonapi.setIn(['agents', indexOf(agentOnTask), 'inPrison'], true);
//   });
//
// if (resultkeys.find(key => key === 'agentKilled'))
//   jsonapiCursor(jsonapi => {
//     return jsonapi.setIn(['agents', indexOf(agentOnTask), 'KIA'], true);
//   });
//
// // and also freeing th agent and gaining his loyalty
// if (resultkeys.find(key => key === 'agentFreed'))
//   jsonapiCursor(jsonapi => {
//     return jsonapi.setIn(['agents', indexOf(agentInPrison), 'inPrison'], false);
//   });
//
// if (resultkeys.find(key => key === 'agentLoyal'))
//   jsonapiCursor(jsonapi => {
//     return jsonapi.setIn(['agents', indexOf(agentInQuestion), 'loyalty'], 'loyal');
//   });
