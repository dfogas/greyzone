/*
  () -> bool
  checkwhether there is agent in armory or not
  returns true when there is agent in armory
*/

import {jsonapiCursor} from '../state';

function checkArmory() {
  if (jsonapiCursor(['agentinarmory']))
    return true;
  else
    return false;
}

export default checkArmory;
