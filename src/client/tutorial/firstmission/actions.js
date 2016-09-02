import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';

export function equipmentUseHintToggle() {
  dispatch(equipmentUseHintToggle, {});
}

setToString('tutorial/firstmission', {
  equipmentUseHintToggle
});
