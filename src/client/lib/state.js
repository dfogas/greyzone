/*
  //
  another example of crappy design process
  no comments whatsoever
  state seems to extending EventEmitter
  looks like Java code
  actually written by Dan Steigerwald, it's probably how he learned it to be done
  BML: false
*/
import EventEmitter from 'eventemitter3';
import immutable from 'immutable';

export default class State extends EventEmitter {

  constructor(state, storesReviver: ?Function) {
    super();
    // so the state seems to be tracked here
    this._state = null;
    this._storesReviver = storesReviver;
    this.load(state || {});
  }

  load(state: Object) {
    const revivedState = immutable.Map.isMap(state)
      ? state
      : this._storesReviver
        ? immutable.fromJS(state, this.revive_(state, this._storesReviver))
        : immutable.fromJS(state);
    this.set(revivedState);
  }

  revive_(state, storesReviver) {
    return function(key, value) {
      // Revive only top level keys.
      if (this === state) {
        const revived = storesReviver(key, value);
        if (revived) return revived;
      }

      // This is default fromJS method behavior. Revive [] as List, and {} as Map.
      return immutable.Iterable.isIndexed(value)
        ? value.toList()
        : value.toMap();
    };
  }

  set(state, path?) {
    if (this._state === state) return;
    // Previous state if useful for debugging global app state diff.
    // It's easy with: https://github.com/intelie/immutable-js-diff
    const previousState = this._state;
    this._state = state;
    this.emit('change', this._state, previousState, path);
  }

  get() {
    return this._state;
  }

  save(): Object {
    return this._state.toJS();
  }

  toConsole() {
    console.log(JSON.stringify(this.save())); // eslint-disable-line no-console
  }

  // it seems to be currying the full function
  cursor(path: Array<string>) {
    return (arg) => {
      if (!arg)
        return this._state.getIn(path);
      if (Array.isArray(arg))
        return this._state.getIn(path.concat(arg));
      this.set(this._state.updateIn(path, arg), path);
    };
  }

}
