/*
  Number Object(agentSkills) -> String
  using default Math.random to determine which skill we increase
*/
var getRandomSkill = function(max, skills) {
  if (typeof max !== 'number')
    throw new TypeError('Number expected, ' + (typeof max) + ' passed.');
  if (typeof skills !== 'object')
    throw new TypeError('JS object expected, ' + (typeof skills) + ' passed.');
  let random = Math.random();

  if (skills.operationsSkill + 1 > max) {
    if (random <= 0.5)
      return 'electronicsSkill';
    if (random > 0.5)
      return 'stealthSkill';
  } else if (skills.electronicsSkill + 1 > max) {
    if (random <= 0.5)
      return 'operationsSkill';
    if (random > 0.5)
      return 'stealthSkill';
  } else if (skills.stealthSkill + 1 > max) {
    if (random <= 0.5)
      return 'operationsSkill';
    if (random > 0.5)
      return 'stealthSkill';
  } else {
    if (random <= 0.34)
      return 'operationsSkill';
    if (random >= 0.34 && random <= 0.67)
      return 'electronicsSkill';
    if (random >= 0.67 && random <= 1)
      return 'stealthSkill';
  }
};

export default getRandomSkill;
