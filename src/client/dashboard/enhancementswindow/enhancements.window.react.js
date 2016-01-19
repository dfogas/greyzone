import './enhancements.window.styl';
import Component from '../../components/component.react.js';
import React from 'react';

import CapabilitySubCards from './capability.subcards.react';
import LeadershipSubCards from './leadership.subcards.react';

class EnhancementsWindow extends Component {
  render() {
    const {enhancements, owned} = this.props;
    const capability = enhancements.filter(enhancement => enhancement.get('type') === 'capability');
    const leadership = enhancements.filter(enhancement => enhancement.get('type') === 'leadership');
    const toys = enhancements.filter(enhancement => enhancement.get('type') === 'toys');
    const operationsscope = enhancements.filter(enhancement => enhancement.get('type') === 'operationsscope');
    return (
      <div id='EnhancementWindow'>
        <CapabilitySubCards
          capability={capability} />
        <LeadershipSubCards
          leadership={leadership} />
        {toys.map((enhancement) => {
          return (
            <div className='enhancement-card'>
              <div>{enhancement.get('name')}</div>
              <div>${enhancement.getIn(['price', 'cash'])}</div>
              <div>{'\u03A9'}{enhancement.getIn(['price', 'contacts'])}</div>
            </div>);
        })}
        {operationsscope.map((enhancement) => {
          return (<div className='enhancement-card'>{enhancement.get('name')}</div>);
        })}
      </div>
    );
  }
}

export default EnhancementsWindow;
