/* ImmutableList -> String */

function topLevelOps(enhancements) {
  const enhancementnames = enhancements.filter(enh => enh.get('type') === 'capability').map(enh => enh.get('name'));

  if (enhancementnames.indexOf('Top Class') !== -1)
    return 'Top Class';
  else if (enhancementnames.indexOf('Higher Level') !== -1)
    return 'Higher Level';
  else if (enhancementnames.indexOf('Good Label') !== -1)
    return 'Good Label';
  else if (enhancementnames.indexOf('Operation II.') !== -1)
    return 'Operation II.';
  else if (enhancementnames.indexOf('Operation I.') !== -1)
    return 'Operation I.';
  else
    return 'Basic';
}

export default topLevelOps;
