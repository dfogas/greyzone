import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function viewItem(name) {
  dispatch(viewItem, {name});
}

export function viewGroup(name) {
  dispatch(viewGroup, {name});
}

setToString('intro', {
  viewGroup,
  viewItem
});
