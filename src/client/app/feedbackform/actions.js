import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {validate} from '../../validation';
import {jsonapiCursor} from '../../state';
import cconfig from '../../client.config';

export function changeValue(name, value) {
  dispatch(changeValue, {name, value});
}

export function sendFeedbackError(error) {
  dispatch(sendFeedbackError, {error});
}

export function sendFeedbackForm(feedback) {
  /* Promisa posílání formuláře */
  /* perform validation, handle errors, if ok send
  feedback = {
    gaminggroup: '',
    browser: '',
    technicals: '',
    playduration: '',
    resultofplay: '',
    stars: {mechanics: '', aesthetics: '', interface: '', theme: '', difficulty: '', consistency: ''},
    generalopinion: '',
    gamevalue: ''
  }*/
  const userId = jsonapiCursor(['userId']);
  feedback.userId = userId;
  const promise = validateFeedbackForm(feedback)
    .then(() => {
      return saveFeedback(feedback);
    })
    .catch((error) => {
      sendFeedbackError(error);
      throw error;
    });

  return dispatch(sendFeedbackForm, promise);

}

function saveFeedback(feedback) {
  const api = process.env.NODE_ENV === 'production' ?
    cconfig.dnsprod + '/api/v1/' :
    cconfig.dnsdevel + '/api/v1/';

  return fetch(api + 'auth/feedback', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(feedback)
    })
    .then((response) => {
      return response.json();
    });
}

export function setStars(rating, name) {
  dispatch(setStars, {rating, name});
}

export function updateFormField(name, value) {
  value = value.slice(0, 400);
  dispatch(updateFormField, {name, value});
}

function validateFeedbackForm(feedback) {
  // Validate function is just wrapper for node-validator providing promise api,
  // so we can mix client sync and server async validations easily.
  return validate(feedback)
    // Of course we can add another validation method.
    .prop('userId').required()
    .prop('gaminggroup').required()
    .prop('browser').required()
    .prop('technicals').required()
    .prop('playduration').required()
    .prop('resultofplay').required()
    .prop('stars').required()
    .prop('generalopinion').required()
    .prop('gamevalue').required()
    .promise;
}

setToString('feedbackform', {
  changeValue,
  sendFeedbackError,
  sendFeedbackForm,
  setStars,
  updateFormField
});
