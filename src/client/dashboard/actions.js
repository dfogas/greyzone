import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function acceptMission(mission) {
  dispatch(acceptMission, {message: mission});
}

export function buyContacts() {
  dispatch(buyContacts, {});
}

export function confirmhire(agent, price) {
  dispatch(confirmhire, {agent, price});
}

export function confirmmissionaccept(mission, cost) {
  dispatch(confirmmissionaccept, {mission, cost});
}

export function hire(agent, price) {
  dispatch(hire, agent);
}

setToString('dashboard', {
  acceptMission,
  buyContacts,
  confirmhire,
  confirmmissionaccept,
  hire
});
