/*
  -> String
  using default Math.random to determine which skill we increase
*/
var getRandomSkill = function() {
  let random = Math.random();

  if (random <= 0.34)
    return 'operationsSkill';

  if (random >= 0.34 && random <= 0.67)
    return 'electronicsSkill';

  if (random >= 0.67 && random <= 1)
    return 'stealthSkill';
};

export default getRandomSkill;
