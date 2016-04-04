import './log.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class LogPointer extends Component {
  pointerChange() {
    dashboardActions.pointerChange('log');
  }

  render() {
    return (
      <div
        className='dashboardscreen-pointer'
        id='ToLog'
        onClick={this.pointerChange}
        >
        Log
      </div>
    );
  }
}

export default LogPointer;
