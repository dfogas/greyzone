/*
  Covered
*/

/*
  ImmutableMap(agent) ImmutableList(trainingtable) -> Number
  guessing - takes experience and training table returns rank that agent with that experience should have
  BML: true
*/

const shouldHaveRank = function(agent, trainingtable) {
  return trainingtable
    .toSeq()
    .takeUntil(record => agent.get('experience') < record.get('xp'))
    .toList()
    .size;
};

export default shouldHaveRank;
