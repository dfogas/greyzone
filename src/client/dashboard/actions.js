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

export function newUserAppendState(email) {
  let userId;
  console.log('newUserAppendState is running');

  const api = process.env.NODE_ENV === 'production' ?
    'http://fierce-shore-7346.herokuapp.com/api/v1/' :
    'http://localhost:8000/api/v1/';
  fetch(api + 'users', {
    method: 'GET',
    headers: {'Content-type': 'application/json'}
  })
    .then((res) => {
      if (res.status >= 400)
        throw new Error('Bad server response.');
        // console.log(res.ok);
        // console.log(res.status);
        // console.log(res.statusText);
        // console.log(res.headers);
        // console.log(res.headers.get('content-type'));
      return res.json();
    })
    .then((users) => {
      userId = users.filter(user => user.username === email).map(user => user._id);
      dispatch(newUserAppendState, {userId});
    });

}

setToString('dashboard', {
  acceptMission,
  buyContacts,
  confirmhire,
  confirmmissionaccept,
  hire,
  newUserAppendState
});
