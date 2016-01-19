import Component from '../../components/component.react.js';
import React from 'react';

class LeadershipSubCards extends Component {
  render() {
    const {leadership} = this.props;
    const level = leadership.filter(enh => enh.get('name') === 'Focus Training II.') ||
      leadership.filter(enh => enh.get('name') === 'Focus Training I.') ||
      leadership.filter(enh => enh.get('name') === 'Training Grounds') ||
      leadership.filter(enh => enh.get('name') === 'Crash Course') ||
      leadership.filter(enh => enh.get('name') === 'Basic Training');
    return (
      <div id='LeadershipSubCards'>
        <div className='enhancement-card'>{level.getIn([0, 'name'])}</div>
      </div>
    );
  }
}

export default LeadershipSubCards;
