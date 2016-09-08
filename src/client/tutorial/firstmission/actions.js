import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';

export function anotherEquipmentUseHintToggle() {
  dispatch(anotherEquipmentUseHintToggle, {});
}

export function equipmentUseHintToggle() {
  dispatch(equipmentUseHintToggle, {});
}

setToString('tutorial/firstmission', {
  anotherEquipmentUseHintToggle,
  equipmentUseHintToggle
});
