import * as actions from './actions';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

export default class Logout extends Component {
  render() {
    return (
      <div className='logout'>
        <button
          className='logout-button'
          onClick={actions.logout}>
          {msg('auth.logout.button')}
        </button>
      </div>
    );
  }
}
