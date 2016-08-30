/* eslint curly: 1 */
import immutable from 'immutable';
import R from 'ramda';
import Maybe from './maybe';

function prop(p, obj) {
  if (immutable.Map.isMap(obj)) {
    return obj.get(p);
  }

  return Maybe.of(obj).map(R.prop(p)).map(R.prop(R.__, obj));
}

export default prop;
