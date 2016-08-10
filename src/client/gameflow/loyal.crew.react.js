import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';
import allAgents from '../lib/bml/allagents';

class LoyalCrew extends Component {
  render() {
    const {jsonapi} = this.props;
    const loyalcrew = allAgents(jsonapi)
      .filter(agent => agent.get('id') !== jsonapi.getIn(['self', 'id']))
      .filter(agent => agent.get('loyalty') === 'loyal').size === allAgents(jsonapi).filter(agent => agent.get('id') !== jsonapi.getIn(['self', 'id']));

    return (
      <div
        className={loyalcrew ? 'done' : ''}
        id='LoyalCrewGoal'>
        {msg('tutorial.goals.loyalcrew')}
      </div>
    );
  }
}

LoyalCrew.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default LoyalCrew;
