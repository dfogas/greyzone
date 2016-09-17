/* ImmutableMap(agent) ImmutableMap(playerState) -> Boolean */

const agentHasUpdates = function(agent, jsonapi) {

  const goodlabel = jsonapi.getIn(['enhancements']).find(enh => enh.get('name') === 'Good Label');
  const enhancements = jsonapi.getIn(['enhancements']);
  const self = jsonapi.getIn(['self']);
  const isNotSelf = self.get('id') !== agent.get('id');

  if ((goodlabel && jsonapi.getIn(['agents']).filter(agent => agent.get('prison')).size && !enhancements.find(enh => enh.get('missiontag') === 'prisonbreak')))
    return true;
  else if (!isNotSelf && goodlabel && jsonapi.getIn(['agents']).filter(agent => agent.get('prison')).size && !enhancements.find(enh => enh.get('missiontag') === 'silencewitness'))
    return true;
  else if (isNotSelf && agent.get('specialist') === 'technician' && goodlabel && agent.get('missionsDone').size > 10 && !enhancements.find(enh => enh.get('missiontag') === 'destroyevidence'))
    return true;
  else if (isNotSelf && agent.get('specialist') === 'spy' && goodlabel && agent.get('loyalty') === 'loyal' && !enhancements.find(enh => enh.get('missiontag') === 'afriendininnercircle'))
    return true;
  else if (isNotSelf && agent.get('personality') === 'SP' && goodlabel && !enhancements.find(enh => enh.get('missiontag') === 'bankrobbery'))
    return true;
  else if (isNotSelf && agent.get('loyalty') !== 'loyal' && goodlabel && !enhancements.find(enh => enh.get('missiontag') === 'anolddebt') && agent.get('id') !== self.get('id'))
    return true;
  else
    return false;
};

export default agentHasUpdates;
