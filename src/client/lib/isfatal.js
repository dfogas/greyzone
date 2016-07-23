/* (ImmutableMap || JSObject) (ImmutableMap || JSObject) -> Boolean
  TODO: sort out the parameters
  Pretty selfexplanatory
  BML: true
*/
import immutable from 'immutable';

function isFatal(losses, rewards) {
  const ft = immutable.Iterable.isIterable(losses) ?
    losses.merge(rewards).keySeq().toJS() :
    immutable.fromJS(rewards).merge(immutable.fromJS(losses)).keySeq().toJS();

  if (ft.indexOf('agentImprisoned') !== -1)
    return true;
  else if (ft.indexOf('agentKilled') !== -1)
    return true;
  else if (ft.indexOf('agentRecruited') !== -1)
    return true;
  else if (ft.indexOf('agentFreed') !== -1)
    return true;
  else if (ft.indexOf('agentLoyal') !== -1)
    return true;
  else
    return false;
}

export default isFatal;
