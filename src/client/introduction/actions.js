import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function viewConcept(name) {
  dispatch(viewConcept, {name});
}

setToString('intro', {
  viewConcept
});
