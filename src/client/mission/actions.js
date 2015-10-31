import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function checkFatalities() {
  dispatch(checkFatalities, {});
}

export function controldamage(mission) {
  dispatch(controldamage, {mission});
}

export function end(mission) {
  dispatch(end, {message: mission});
}

export function fail(mission) {
  dispatch(fail, {message: mission});
}

export function select(mission) {
  dispatch(select, {message: mission});
}

export function start() {
  dispatch(start, {});
}

export function success(mission) {
  dispatch(success, {message: mission});
}

export function taskCompleted(currenttask) {
  dispatch(taskCompleted, {message: currenttask});
}

export function test() {
  dispatch(test, {});
}

/*
  get success probability
*/

setToString('mission', {
  checkFatalities,
  controldamage,
  end,
  fail,
  select,
  start,
  success,
  taskCompleted,
  test
});
