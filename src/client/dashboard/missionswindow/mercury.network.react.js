import './mercury.network.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class MercuryNetwork extends Component {
  render() {
    return (
      <div id='MercuryNetwork'>
        <button
          className='mercury-network-button'
          id='CashFocusMissionButton'
          onClick={(e) => dashboardActions.cashFocusMission()}
          >{`\u{1f4b0}`}</button>
        <button
          className='mercury-network-button'
          id='ContactsFocusMissionButton'
          onClick={(e) => dashboardActions.contactsFocusMission()}
          >{`\u{1f575}`}</button>
        <button
          className='mercury-network-button'
          id='ReputationFocusMissionButton'
          onClick={(e) => dashboardActions.reputationFocusMission()}
          >{`\u{1f3c6}`}</button>
        <button
          className='mercury-network-button'
          id='ObscurityFocusMissionButton'
          onClick={(e) => dashboardActions.obscurityFocusMission()}
          >{`\u{1f441}`}</button>
      </div>
    );
  }
}

export default MercuryNetwork;
