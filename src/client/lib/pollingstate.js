/*
  Impure
  ImmutableMap(jsonapi) String(node_environment) -> () SideEffects
  purpose of this function is to check whether state of gameplay changed and
  depending on result do or don't do a fetch call
  this is rather app logic not BML
*/

import cconfig from '../client.config';
import hashString from './hashstring';
import lockr from 'lockr';

// // 1st stage - poll only if changes - check
// // TODO: if polling then
// // 2nd stage - poll only changes
// // else - possibly completely replace w/ websockets

function pollingStateToPersistence(jsonapi, nodeEnv) {
  const api = nodeEnv === 'production' ?
    cconfig.dnsprod + '/api/v1/' :
    cconfig.dnsdevel + '/api/v1/';
  const userId = jsonapi.get('userId');
  const hashOfState = hashString(jsonapi.toString());
  const stateChanged = lockr.get('ghoststrugglestatehash') !== hashOfState;

  if (stateChanged)
    lockr.set('ghoststrugglestatehash', hashOfState);

  if (jsonapi.get('name') !== 'Default' && stateChanged) {
    console.log('polling to persistance'); // eslint-disable-line no-console
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
