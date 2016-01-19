import Component from '../../components/component.react.js';
import React from 'react';

class CapabilitySubCards extends Component {
  render() {
    const {capability} = this.props;
    const level = capability.filter(enh => enh.get('name') === 'Top Class') ||
      capability.filter(enh => enh.get('name') === 'Higher Level') ||
      capability.filter(enh => enh.get('name') === 'Good Label') ||
      capability.filter(enh => enh.get('name') === 'Operation II.') ||
      capability.filter(enh => enh.get('name') === 'Operation I.');
    return (
      <div id='CapabilitySubCards'>
        <div className='enhancement-card'>{level.getIn([0, 'name'])}</div>
      </div>
    );
  }
}

export default CapabilitySubCards;
