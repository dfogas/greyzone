import './statuses.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';

class StatusesPointer extends Component {
  pointerChange() {
    dashboardActions.pointerChange('statuses');
  }

  render() {
    return (
      <div
        className='dashboardscreen-pointer'
        id='ToStatuses'
        onClick={this.pointerChange}
        >
        {msg('dashboard.statuses.window')}
      </div>
    );
  }
}

export default StatusesPointer;
