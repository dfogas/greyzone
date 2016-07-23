/*
  an example how you not should write a function, no design process took place here,
  and you need to figure out what the fuck is going on here
*/

/*
  Number ImmutableList(trainingtable) -> Number
  guessing - takes experience and training table returns rank
  BML: true
*/

const shouldHaveRank = function(experience, trainingtable) {
  return trainingtable
    .toSeq()
    .takeUntil(record => experience < record.get('xp'))
    .toList()
    .size - 1;
};

export default shouldHaveRank;
