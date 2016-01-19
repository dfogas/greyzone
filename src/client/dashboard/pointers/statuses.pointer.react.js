import './statuses.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

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
        Statuses
      </div>
    );
  }
}

export default StatusesPointer;
