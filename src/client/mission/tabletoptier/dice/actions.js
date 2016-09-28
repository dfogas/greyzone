import {dispatch} from '../../../dispatcher';
import setToString from '../../../lib/settostring';
import immutable from 'immutable';

import playSound from '../../../lib/sound';
import {jsonapiCursor} from '../../../state';
import $ from 'jquery';

export function create(dice) {
  const actionchoose = jsonapiCursor(['activemission', 'equipmenteffects', 'actionchoose']) || immutable.fromJS([{}]);
  const dicekeys = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']).map(die => die.get('dicekey'));
  const debugswitch = jsonapiCursor(['options', 'debug']);
  if (dicekeys.indexOf(dice.dicekey) !== -1)
    flashMission(`This is not possible`);
  else if (actionchoose.find(ac => ac.get('dicekey') === dice.dicekey)) {// so that WPAS dice does not erase actionchoose
    dispatch(create, dice);
    dispatch(removeActionChoose, {});
  } else dispatch(create, dice);
  if (debugswitch)
    dispatch(create, dice);
}

export function destroyLockedDice() {
  dispatch(destroyLockedDice, {});
}

function flashMission(message) {
  $('#MissionStartMessage').remove();
  $('#TableTop').append(`<div id=\'MissionStartMessage\'>${message}</div>`);
  $('#MissionStartMessage').hide().fadeIn(200);
  $('#MissionStartMessage').fadeOut(1000, () => $('#MissionStartMessage').remove());
}

export function protectiveGearEffectFizzle() {
  dispatch(protectiveGearEffectFizzle, {});
}

export function protectiveGearUse(dices) {
  for (let i = 0; i < dices.size; i += 1)
    roll(dices.get(i));
  protectiveGearEffectFizzle();
}

export function remove(dice) {
  const lockeddicekey = jsonapiCursor(['activemission', 'equipmenteffects', 'lockeddice', 'dicekey']);
  if (lockeddicekey === dice.dicekey)
    destroyLockedDice();
  dispatch(remove, dice);
}

export function removeActionChoose() {
  dispatch(removeActionChoose, {});
}

export function roll(dice) {
  dispatch(roll, {dice});
}

export function rollAll() {
  playSound('../../../assets/audio/diceInHand.ogg');
  dispatch(rollAll, {message: 'all dices rolled'});
}

export function selectForReroll(index) {
  dispatch(selectForReroll, {index: index});
}

setToString('dice', {
  create,
  destroyLockedDice,
  protectiveGearEffectFizzle,
  remove,
  removeActionChoose,
  roll,
  rollAll,
  selectForReroll
});
