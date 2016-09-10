import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';
import allAgents from '../lib/bml/allagents';

class LoyalCrew extends Component {
  render() {
    const {jsonapi} = this.props;
    // WTF loyalcrew?
    const loyalCrew = allAgents(jsonapi)
      .filter(agent => agent.get('id') !== jsonapi.getIn(['self', 'id'])) // vyřadím sebe jako hráče
      .filter(agent => agent.get('loyalty') === 'loyal');
    const crew = allAgents(jsonapi).filter(agent => agent.get('id') !== jsonapi.getIn(['self', 'id']));
    const peopleAreLoyal = loyalCrew.size === crew.size;

    return (
      <div
        className={peopleAreLoyal ? 'done' : ''}
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
