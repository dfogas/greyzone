/* ImmutableMap(jsonapi)-> JS function expression
  in order to make displaying results of mission composable
  BML: true
*/

import uuid from '../guid';
import icon from './determiningicon';
import React from 'react';

function missionWindowResults(jsonapi) {
  const activemission = jsonapi.get('activemission');
  const result = activemission.get('result');
  const rewards = activemission.get('rewards');
  const losses = activemission.get('losses');
  // const results = losses.merge(rewards);
  // const tutorial = jsonapi.get('tutorial');
  const damageprevented = activemission.getIn(['equipmenteffects', 'damageprotocol']);
  const phrasingOfReward = function(reward) {
    if (typeof reward === 'number' && reward > 0)
      return 'gained';
    else if (typeof reward === 'number')
      return 'expended';
    else if (typeof reward === 'boolean')
      return 'done';
    else if (reward === 'spy' || reward === 'technician' || reward === 'operative')
      return 'added to your agents';
    else
      return '...';
  };
  const phrasingOfLosses = function(loss) {
    if (typeof loss === 'number' && loss > 0)
      return 'lost';
    else if (typeof loss === 'number')
      return 'salvaged';
    else if (typeof loss === 'boolean')
      return 'done';
    else
      return '...';
  };

  if (result === 'success')
    return rewards.keySeq().map(key => {
      return (
        <li key={uuid() + 'missionreward'}>
        {
          `${icon(key)}${String(rewards.get(key)).replace(/000000$/, 'M').replace(/000$/, 'k').replace('true', '')}
            has been ` + phrasingOfReward(rewards.get(key)) + `.`
        }</li>
      );
    });
  else if (damageprevented)
    return losses.keySeq().map(key => {
      if (key === 'reputation')
        return (
          <li key={uuid() + 'missionloss'}>
            {
              `${icon(key)}${String(losses.get(key)).replace(/000000$/, 'M').replace(/000$/, 'k').replace('true', '')}
              has been ` + phrasingOfLosses(losses.get(key)) + `.`
            }
          </li>
        );
    });
  else
    return losses.keySeq().map(key => {
      return (
        <li key={uuid() + 'missionloss'}>
          {
            `${icon(key)}${String(losses.get(key)).replace(/000000$/, 'M').replace(/000$/, 'k').replace('true', '')}
            has been ` + phrasingOfLosses(losses.get(key)) + `.`
          }</li>
      );
    });
}

export default missionWindowResults;
