import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function animationEnd() {
  dispatch(animationEnd, {});
}

setToString('animations', {
  animationEnd
});
