import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function acceptMission(mission) {
  dispatch(acceptMission, {message: mission});
}

export function confirmhire(agent) {
  dispatch(confirmhire, agent);
}

export function confirmmissionaccept(mission) {
  dispatch(confirmmissionaccept, mission);
}

export function hire(agent) {
  dispatch(hire, agent);
}

setToString('dashboard', {
  acceptMission,
  confirmhire,
  confirmmissionaccept,
  hire
});
