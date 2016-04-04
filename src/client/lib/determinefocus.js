/*
  [Rewards] => {FocusBools}
*/

function determineFocus(rewards) {
  var keys = Object.keys(rewards);
  var focus = {};

  if (keys.indexOf('artPieceGained') !== -1)
    focus.special = true;

  if (keys.indexOf('agentFreed') !== -1)
    focus.special = true;

  if (keys.indexOf('agentLoyal') !== -1)
    focus.special = true;

  if (keys.indexOf('gameCash') !== -1)
    focus.money = true;

  if (keys.indexOf('gameContacts') !== -1)
    focus.contacts = true;

  if (keys.indexOf('reputation') !== -1)
    focus.reputation = true;

  if (keys.indexOf('obscurity') !== -1)
    focus.obscurity = true;

  // TODO: Do not forget about multiplayer

  return focus;
}

export default determineFocus;