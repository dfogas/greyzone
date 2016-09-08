import * as tutorialFirstMissionActions from './actions';
import {register} from '../../dispatcher';
import {jsonapiCursor} from '../../state';

export const dispatchToken = register(({action, data}) => {
  if (action === tutorialFirstMissionActions.equipmentUseHintToggle) {
    const toggle = jsonapiCursor(['tutorial', 'firstmission', 'equipmentusehint']);
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['tutorial', 'firstmission', 'equipmentusehint'], !toggle);
    });
  }

  if (action === tutorialFirstMissionActions.anotherEquipmentUseHintToggle) {
    const toggle = jsonapiCursor(['tutorial', 'firstmission', 'anotherequipmentusehint']);
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['tutorial', 'firstmission', 'anotherequipmentusehint'], !toggle);
    });
  }
});
