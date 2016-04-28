import './enhancements.window.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import R from 'ramda';
import immutable from 'immutable';
import uuid from '../../lib/guid';

import CapabilitySubCards from './capability.subcards.react';
import LeadershipSubCards from './leadership.subcards.react';
import EnhancementCard from './enhancement.card.react';

class EnhancementsWindow extends Component {
  render() {
    const {enhancements, owned} = this.props;
    const capabilityowned = owned.filter(enhancement => enhancement.get('type') === 'capability');
    const leadershipowned = owned.filter(enhancement => enhancement.get('type') === 'leadership');
    const toysowned = owned.filter(enhancement => enhancement.get('type') === 'toys');
    const operationsscopeowned = owned.filter(enhancement => enhancement.get('type') === 'operationsscope');

    const toys = enhancements.filter(enhancement => enhancement.get('type') === 'toys');
    const operationsscope = enhancements.filter(enhancement => enhancement.get('type') === 'operationsscope');

    const toysnotowned = immutable.fromJS(R.without(toysowned.toJS(), toys.toJS()));
    const operationsscopenotowned = immutable.fromJS(R.without(operationsscopeowned.toJS(), operationsscope.toJS()));

    return (
      <div id='EnhancementWindow'>
        <CapabilitySubCards
          capability={capabilityowned} />
        <LeadershipSubCards
          leadership={leadershipowned} />
        {toysowned.map((enhancement) => {
          return (
            <EnhancementCard
              enhancement={enhancement}
              key={uuid() + 'toysowned'}
              owned={true}
              />
          );
        })}
        {operationsscopeowned.map((enhancement) => {
          return (
            <EnhancementCard
              enhancement={enhancement}
              key={uuid() + 'operationsscopeowned'}
              owned={true}
              />
          );
        })}
        {toysnotowned.map((enhancement) => {
          return (
            <EnhancementCard
              enhancement={enhancement}
              key={uuid() + 'toys'}
              owned={false}
              />
          );
        })}
        {operationsscopenotowned.map((enhancement) => {
          return (
            <EnhancementCard
              enhancement={enhancement}
              key={uuid() + 'operationsscope'}
              owned={false}
              />
          );
        })}
      </div>
    );
  }
}

EnhancementsWindow.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  owned: React.PropTypes.instanceOf(immutable.List)
};

export default EnhancementsWindow;
