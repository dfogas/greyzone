import './armory.code.toggle.styl';
import * as agentsActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import capitalLetter from '../lib/general/capitalletter';

class ArmoryCode extends Component {
  render() {
    const {armorycode, isActive} = this.props;
    return (
      <div
        className='armory-code'
        id={`ArmoryCode${capitalLetter(armorycode)}`}
        onClick={(e) => agentsActions.armoryCode(armorycode)}
        style={{
          boxShadow: isActive ? `0 0 30px ${armorycode}` : ``
        }}>
      </div>
    );
  }
}

ArmoryCode.propTypes = {
  armorycode: React.PropTypes.string,
  isActive: React.PropTypes.boolean
};

export default ArmoryCode;
