import {dispatch} from '../../../dispatcher'; //
import setToString from '../../../lib/settostring';
import Sound from '../../../lib/sound';
import {jsonapiCursor} from '../../../state';
import $ from 'jquery';

export function create(dice) {
  const dicekeys = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']).map(die => die.get('dicekey'));
  const debugswitch = jsonapiCursor(['options', 'debug']);
  if (dicekeys.indexOf(dice.dicekey) !== -1)

    flashMission(`This is not possible`);
  else
    dispatch(create, dice);
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

export function roll(dice) {
  dispatch(roll, {dice});
}

export function rollAll() {
  if (jsonapiCursor(['options', 'soundeffects'])) {
    let mySound = new Sound('../../../assets/audio/diceInHand.ogg');
    mySound.play();
  }
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
  roll,
  rollAll,
  selectForReroll
});
