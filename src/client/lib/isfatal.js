/* Object -> Boolean */

function isFatal(losses) {
  var ft = Object.keys(losses);

  if (ft.indexOf('agentImprisoned') !== -1)
    return true;
  else if (ft.indexOf('agentKilled') !== -1)
    return true;
  else
    return false;
}

export default isFatal;
