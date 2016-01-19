import './contest.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class ContestPointer extends Component {
  pointerChange() {
    dashboardActions.pointerChange('contest');
  }

  render() {
    return (
      <div
        className='dashboardscreen-pointer'
        id='ToContest'
        onClick={this.pointerChange}
        >
        Contest
      </div>
    );
  }
}

export default ContestPointer;
