import * as actions from './actions';
import {register} from '../../../dispatcher';
import {jsonapiCursor} from '../../../state';
import dicethrow from '../../../lib/dicethrow';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  if (action === actions.rollAll) {
    const actiondices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']);
    let actdices = actiondices.toJS();

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], immutable.fromJS(actdices.map(dice => dicethrow(dice.type, dice.dicekey))))
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], true);
    });
  }

  if (action === actions.create)
    jsonapiCursor(jsonapi => {
      return jsonapi
      .updateIn(['activemission', 'mission', 'currenttask', 'actiondices'], val => val.push(immutable.fromJS({type: data.dicetype, name: data.name, key: data.key})))
      .setIn(['activemission', 'equipmenteffects', 'actionchoose'], null);
    });

  if (action === actions.remove)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'mission', 'currenttask', 'actiondices'], val => val.remove(data.diceindex))
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], false);
    });

  // if (action === actions.roll)
  //   dicethrow(data.message.type);

});
