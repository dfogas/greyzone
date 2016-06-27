import './enhancements.window.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import R from 'ramda';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import uuid from '../../lib/guid';

import CapabilitySubCards from './capability.subcards.react';
import LeadershipSubCards from './leadership.subcards.react';
import EnhancementCard from './enhancement.card.react';

class EnhancementsWindow extends Component {
  render() {
    const {enhancements, owned, paying} = this.props;
    const toysowned = owned.filter(enhancement => enhancement.get('type') === 'toys');
    const operationsscopeowned = owned.filter(enhancement => enhancement.get('type') === 'operationsscope');

    const toys = enhancements.filter(enhancement => enhancement.get('type') === 'toys');
    const operationsscope = enhancements.filter(enhancement => enhancement.get('type') === 'operationsscope');

    const toysnotowned = immutable.fromJS(R.without(toysowned.toJS(), toys.toJS()));
    const operationsscopenotowned = immutable.fromJS(R.without(operationsscopeowned.toJS(), operationsscope.toJS()));

    return (
      <div id='EnhancementsWindow'>
        <div id='EnhancementsWindowLabel'>{msg('dashboard.enhancements.window.label')}</div>
        <CapabilitySubCards
          enhancements={owned}
          list={enhancements} />
        <LeadershipSubCards
          enhancements={owned}
          list={enhancements} />
        {toysowned.map((enhancement) => {
          return (
            <EnhancementCard
              enhancement={enhancement}
              key={uuid() + 'toysowned'}
              owned={true}
              paying={paying}
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
              paying={paying}
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
  owned: React.PropTypes.instanceOf(immutable.List),
  paying: React.PropTypes.instanceOf(immutable.Map)
};

export default EnhancementsWindow;
