/*
  Simple serial "one by one" sync/async promises based validation.
  BML: false
*/
import Promise from 'bluebird';
import React from 'react';
import validator from 'validator';

export class ValidationError extends Error {
  constructor(message: string, prop: string) {
    super();
    this.message = message;
    this.prop = prop;
  }
}

export function focusInvalidField(component) {
  return (error) => {
    if (error instanceof ValidationError) {
      if (!error.prop) return;
      const node = React.findDOMNode(component);
      if (!node) return;
      const el = node.querySelector(`[name=${error.prop}]`);
      if (!el) return;
      el.focus();
      return;
    }
    throw error;
  };
}

export default class Validation {

  constructor(object: Object) {
    this._object = object;
    this._prop = null;
    this._validator = validator;
    this.promise = Promise.resolve();
  }

  custom(callback: Function, {required} = {}) {
    const prop = this._prop;
    const value = this._object[prop];
    const object = this._object;
    this.promise = this.promise.then(() => {
      if (required && !this._isEmptyString(value)) return;
      callback(value, prop, object);
    });
    return this;
  }

  _isEmptyString(value) {
    return !this._validator.toString(value).trim();
  }

  prop(prop: string) {
    this._prop = prop;
    return this;
  }

  required(getRequiredMessage?) {
    return this.custom((value, prop) => {
      const msg = getRequiredMessage
        ? getRequiredMessage(prop, value)
        : this.getRequiredMessage(prop, value);
      throw new ValidationError(msg, prop);
    }, {required: true});
  }

  getRequiredMessage(prop, value) {
    return `Please fill out '${prop}' field.`;
  }

  email() {
    return this.custom((value, prop) => {
      if (this._validator.isEmail(value)) return;
      throw new ValidationError(
        this.getEmailMessage(prop, value),
        prop
      );
    });
  }

  getEmailMessage() {
    return `Email address is not valid.`;
  }

  simplePassword() {
    return this.custom((value, prop) => {
      const minLength = 5;
      if (value.length >= minLength) return;
      throw new ValidationError(
        this.getSimplePasswordMessage(minLength),
        prop
      );
    });
  }

  getSimplePasswordMessage(minLength) {
    return `Password must contain at least ${minLength} characters.`;
  }

  organization() {
    return this.custom((value, prop) => {
      const maxLength = 16;
      const minLength = 3;
      if (value.length >= minLength && value.length <= maxLength) return;
      throw new ValidationError(
        `Organization must be from ${minLength} to ${maxLength} characters`,
        prop
      );
    });
  }

}
