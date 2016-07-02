/*
  Impure
  ImmutableMap(jsonapi) String(node_environment) -> () SideEffects
  purpose of this function is to check whether state of gameplay changed and
  depending on result do or don't do a fetch call
*/

import cconfig from '../client.config';
import hashString from './hashstring';

// // 1st stage - poll only if changes - check
// // TODO: if polling then
// // 2nd stage - poll only changes
// // 3rd stage - possibly completely replace w/ websockets

function pollingStateToPersistence(jsonapi, nodeEnv) {
  const api = nodeEnv === 'production' ?
    cconfig.dnsprod + '/api/v1/' :
    cconfig.dnsdevel + '/api/v1/';
  const userId = jsonapi.get('userId');
  const hashOfState = hashString(jsonapi.toString());
  const stateChanged = parseInt(localStorage.getItem(['ghoststruggle', 'statehash']), 10) !== hashOfState;

  if (stateChanged)
    localStorage.setItem(['ghoststruggle', 'statehash'], hashOfState);

  if (jsonapi.get('name') !== 'Default' && stateChanged) {
    console.log('polling to persistance');
    fetch(api + 'players/' + userId, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(jsonapi)
    });
    // .then((response) => {
    //   console.log(response);
    // });
  }
}

export default pollingStateToPersistence;