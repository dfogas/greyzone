import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';

export function scrollLeft() {
  dispatch(scrollLeft, {});
}

export function scrollRight() {
  dispatch(scrollRight, {});
}

setToString('scrollbar', {
  scrollLeft,
  scrollRight
});
