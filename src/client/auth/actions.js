import Promise from 'bluebird';
import setToString from '../lib/settostring';
import {ValidationError} from '../lib/validation';
import {dispatch} from '../dispatcher';
import {validate} from '../validation';
import {msg} from '../intl/store';
import cconfig from '../client.config';

export function login(fields) {
  const promise = validateForm(fields) // Promise, because we don't know whether fields are valid.
    .then(() => {
      return validateCredentials(fields);
    })
    .catch(error => {
      loginError(error);
      throw error;
    });

  return dispatch(login, promise);
}

function validateForm(fields) {
  // Validate function is just wrapper for node-validator providing promise api,
  // so we can mix client sync and server async validations easily.
  return validate(fields)
    // Of course we can add another validation method.
    .prop('email').required().email()
    .prop('password').required().simplePassword()
    .promise;
}

function validateCredentials(fields) {
  const api = process.env.NODE_ENV === 'production' ?
    cconfig.dnsprod + '/api/v1/' :
    cconfig.dnsdevel + '/api/v1/';

  return fetch(api + 'auth/login', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(fields)
    })
    .then(response => {
      let error;
      if (response.ok)
        return response.json();
      if (response.status === 401)
        error = new ValidationError(msg('auth.form.wrongPassword'), 'password');
      else
        error = new Error(response.statusText);
      error.response = response;
      throw error;
    });
}

export function loginError(error) {
  dispatch(loginError, error);
}

export function logout() {
  // Always reload app on logout for security reasons.
  location.href = '/';
}

export function redirectToLogin() {
  // should reload app with /login path
  location.href = '/login';
}

export function lpwRecover(fields) {
  const promise = validateEmail(fields)
    .then(() => {
      return recoverPassword(fields);
    })
    .catch(error => {
      lpwRecoverError(error);
      throw error;
    });

  return dispatch(lpwRecover, promise);
}

function validateEmail(fields) {
  return validate(fields)
    .prop('email').required().email()
    .promise;
}

function recoverPassword(fields) {
  return new Promise((resolve, reject) => {
    // TODO: find better way to write this, comment well on interfaces used
    // though I have written several calls like that the pattern eludes me here
    // it works well
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/v1/auth/lprecover', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200)
        resolve(fields);
      // else
      //   reject(new ValidationError(msg('auth.form.invalidPassword'), 'password'));
    };

    xhr.send(JSON.stringify(fields));
  });
}

export function lpwRecoverError(error) {
  dispatch(lpwRecoverError, error);
}

export function updateFormField({target: {name, value}}) {
  // Both email and password max length is 100.
  value = value.slice(0, 100);
  dispatch(updateFormField, {name, value});
}

export function signup(fields) {
  signupError(new ValidationError({
    message: `
      Processing request
    `
  }));
  // promise, because we don't know whether fields are valid
  const promise = validateSignupForm(fields)
    .then(() => {
      return saveCredentials(fields);
    })
    .catch(error => {
      signupError(error);
      throw error;
    });

  return promise;
}

function validateSignupForm(fields) {
  // Validate function is just wrapper for node-validator providing promise api,
  // so we can mix client sync and server async validations easily.
  return validate(fields)
    // Of course we can add another validation method.
    .prop('email').required().email()
    .prop('password').required().simplePassword()
    .prop('organization').required().organization()
    .promise;
}

function saveCredentials(fields) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/v1/auth/signup', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      // console.log(JSON.parse(xhr.responseText));
      if (JSON.parse(xhr.responseText).description === `New Signup`) {
        resolve(fields);
        signupError(new ValidationError({
          message: `
            Authentication email has been sent to your mailbox.
          `
        }));
      } else if (JSON.parse(xhr.responseText).description === `Repeated Signup`) {
        signupError(new ValidationError({
          message: `
            Authentication email has been resent. Check your mailbox,
            possibly a spam folder, due to overzealous spam filters.
          `
        }));
        resolve(fields);
      } else {
        const error = JSON.parse(xhr.responseText).message || `Unhandled signup Error.`;
        reject(new ValidationError(error, 'password'));
      }
    };

    xhr.send(JSON.stringify(fields));
  });
}

export function signupError(error) {
  dispatch(signupError, error);
}

export function reauthenticate(fields, hash) {
  const promise = validateForm(fields)
    .then(() => {
      resaveCredentials(fields, hash);
    })
    .catch(error => {
      reauthenticateError(error);
      throw error;
    });

  return dispatch(reauthenticate, promise);
}

function resaveCredentials(fields, hash) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/v1/auth/reauthentication?hash=' + hash, true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200)
        resolve(fields);
      // else
      //   reject(new ValidationError(msg('auth.form.invalidPassword'), 'password'));
    };

    xhr.send(JSON.stringify(fields));
  });
}

export function reauthenticateError(error) {
  dispatch(reauthenticateError, error);
}

setToString('auth', {
  login,
  loginError,
  logout,
  lpwRecover,
  lpwRecoverError,
  reauthenticate,
  reauthenticateError,
  redirectToLogin,
  signup,
  signupError,
  updateFormField
});
