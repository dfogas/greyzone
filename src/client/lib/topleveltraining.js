/* ImmutableList -> String */

function topLevelTraining(enhancements) {
  const enhancementnames = enhancements.filter(enh => enh.get('type') === 'leadership').map(enh => enh.get('name'));

  if (enhancementnames.indexOf('Focus Training II.') !== -1)
    return 'Focus Training II.';
  else if (enhancementnames.indexOf('Focus Training I.') !== -1)
    return 'Focus Training I.';
  else if (enhancementnames.indexOf('Training Grounds') !== -1)
    return 'Training Grounds';
  else if (enhancementnames.indexOf('Crash Course') !== -1)
    return 'Crash Course';
  else if (enhancementnames.indexOf('Basic Training') !== -1)
    return 'Basic Training';
  else
    return 'No Training';
}

export default topLevelTraining;
