import immutable from 'immutable';
import trainingtable from './trainingtable';

const shouldHaveRank = function(experience) {
  return immutable
    .fromJS(trainingtable)
    .toSeq()
    .takeUntil(record => experience < record.get('xp'))
    .toList()
    .size - 1;
};

export default shouldHaveRank;
