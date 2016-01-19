import immutable from 'immutable';
import trainingtable from '../../server/lib/greyzone/trainingtable';

/*
  an example how you not should write a function, no design process took place here,
  and you need to figure out what the fuck is going on here
*/
const shouldHaveRank = function(experience) {
  return immutable
    .fromJS(trainingtable)
    .toSeq()
    .takeUntil(record => experience < record.get('xp'))
    .toList()
    .size - 1;
};

export default shouldHaveRank;
