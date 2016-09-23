/* () -> String
  returns one of ['SP', 'SJ', 'NF', 'NT'] */

const personality = function() {
  let chance = Math.random();

  if (chance < 0.35)
    return 'SP';
  else if (chance < 0.7)
    return 'SJ';
  else if (chance < 0.85)
    return 'NT';
  else
    return 'NF';
};

export default personality;
