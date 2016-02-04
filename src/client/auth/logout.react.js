import * as actions from './actions';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

export default class Logout extends Component {
  render() {
    return (
      <button
        className='logout-button'
        id='DashboardScreenLogout'
        onClick={actions.logout}>
        {msg('auth.logout.button')}
      </button>
    );
  }
}
