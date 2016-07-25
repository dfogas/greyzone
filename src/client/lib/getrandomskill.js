/* eslint curly: 1 */
/*
  Number Object(agentSkills) -> String
  using default Math.random to determine which skill we increase, when agent ranks up
  BML: true
*/
const getRandomSkill = function(maximum, skills) {
  if (typeof maximum !== 'number')
    throw new TypeError('Number expected, ' + (typeof maximum) + ' passed.');
  if (typeof skills !== 'object')
    throw new TypeError('JS object expected, ' + (typeof skills) + ' passed.');
  var random = Math.random();

  const isSkillMaxed = Object.keys(skills).map(key => skills[key]).reduce((prev, curr) => {
    if (prev > curr)
      return prev;
    else
      return curr;
  }, 0) >= maximum;

  if (!isSkillMaxed) {
    if (random <= 0.34)
      return 'operationsSkill';
    if (random >= 0.34 && random <= 0.67)
      return 'electronicsSkill';
    else return 'stealthSkill';
  } else if (skills.operationsSkill === maximum) {
    if (random <= 0.5)
      return 'electronicsSkill';
    else return 'stealthSkill';
  } else if (skills.electronicsSkill === maximum) {
    if (random <= 0.5)
      return 'operationsSkill';
    else return 'stealthSkill';
  } else if (random <= 0.5)
    return 'operationsSkill';
  else return 'electronicsSkill';
};

export default getRandomSkill;
