import * as actions from './actions';//
import {register} from '../../../dispatcher';
import {jsonapiCursor} from '../../../state';
import diceThrow from '../../../lib/bml/dicethrow';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  if (action === actions.rollAll) {
    const actiondices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']);
    let actdices = actiondices.toJS();

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], immutable.fromJS(actdices.map(dice => diceThrow(dice.type, dice.dicekey))))
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], true);
    });
  }

  if (action === actions.create)
    jsonapiCursor(jsonapi => {
      return jsonapi
      .updateIn(['activemission', 'mission', 'currenttask', 'actiondices'], val => val.push(immutable.fromJS({type: data.dicetype, name: data.name, dicekey: data.dicekey, rollable: false})))
      .setIn(['activemission', 'equipmenteffects', 'actionchoose'], null);
    });

  if (action === actions.protectiveGearEffectFizzle)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'equipmenteffects', 'protectivegear'], false);
    });

  if (action === actions.remove)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'mission', 'currenttask', 'actiondices'], val => val.remove(data.diceindex))
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], false);
    });

  if (action === actions.roll) {
    const actiondices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'actiondices', actiondices.indexOf(actiondices.find(dice => dice.get('dicekey') === data.dice.get('dicekey')))], immutable.fromJS(diceThrow(data.dice.get('type'), data.dice.get('dicekey'))));
    });
  }

  if (action === actions.selectForReroll)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'mission', 'currenttask', 'actiondices', data.index, 'rollable'], val => !val);
    });

});
