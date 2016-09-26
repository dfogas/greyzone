import './mercury.network.styl';
import * as missionsWindowActions from './actions';
import Component from '../../components/component.react';
import React from 'react';

class MercuryNetwork extends Component {
  render() {
    return (
      <div id='MercuryNetwork'>
        <button
          className='mercury-network-button'
          id='CashFocusMissionButton'
          onClick={(e) => missionsWindowActions.cashFocusMission()}
          >{`\u{1f4b0}`}</button>
        <button
          className='mercury-network-button'
          id='ContactsFocusMissionButton'
          onClick={(e) => missionsWindowActions.contactsFocusMission()}
          >{`\u{1f575}`}</button>
        <button
          className='mercury-network-button'
          id='ReputationFocusMissionButton'
          onClick={(e) => missionsWindowActions.reputationFocusMission()}
          >{`\u{1f3c6}`}</button>
        <div
          className='mercury-network-button double'
          id='ObscurityFocusMissionButton'
          onClick={(e) => missionsWindowActions.obscurityFocusMission()}
          >{`\u{1f70b} \u{1f441}`}</div>
      </div>
    );
  }
}

export default MercuryNetwork;
