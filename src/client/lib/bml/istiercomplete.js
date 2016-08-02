/* Number ImmutableList(Player Statuses) ImmutableList(Game StatusList) -> Boolean */

var isTierComplete = function(tier, statuses, list) {
  const alltieritems = list.filter(item => item.get('tier') === tier);
  const tieritems = statuses.filter(item => item.get('tier') === tier);

  return alltieritems.size === tieritems.size;
};

export default isTierComplete;
