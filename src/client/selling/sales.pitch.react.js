import './sales.pitch.styl';
import * as componentsActions from '../components/actions';
import React from 'react';
import Component from '../components/component.react';

class SalesPitch extends Component {
  render() {
    return (
      <div id='SalesPitch'>
        <div className='sales-pitch-close-handle' onClick={(e) => componentsActions.salesPitchToggle()}></div>
        What do I get when I buy the game?
        <li>Unlimited access to tier 3 equipment - Protective Gear(operative), WPAS(technician), DCP(spy)</li>
        <li>A powerful tool to calculate dicethrow success rate.</li>
        <li>Access to special mission, if your agent is a spy(not implemented yet, just a stub).</li>
        <li>More content(special missions, special agents, equipments, ends) with the updates.</li>
        <li>Your support will enable me to drive the game toward its full potential.</li>
      </div>
    );
  }
}

SalesPitch.propTypes = {

};

export default SalesPitch;
