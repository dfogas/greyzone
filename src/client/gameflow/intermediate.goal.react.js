import './intermediate.goal.styl';
import * as dashboardActions from '../dashboard/actions';
import Component from '../components/component.react';
import React from 'react';
// import {msg} from '../intl/store';
import immutable from 'immutable';

import FirstMissionGoal from './first.mission.goal.react';
import AgentRankFour from './agent.rank.four.react';
import OperationsLevelThree from './operations.level.three.react';
import GetMoreMissions from './get.more.missions.react';
import LoyalCrewGoal from './loyal.crew.react';
import DolceVitaGoal from './dolcevita.goal.react';

class IntermediateGoal extends Component {
  render() {
    const {jsonapi} = this.props;

    return (
      <div
        id='IntermediateGoal'
        onClick={(e) => dashboardActions.intermediateGoalToggle()}>
        {<FirstMissionGoal firstmission={jsonapi.getIn(['tutorial', 'firstmission'])} />}
        {<AgentRankFour agentrankfour={jsonapi.get('agents').find(agent => agent.get('rank') >= 4)} />}
        {<OperationsLevelThree operationslevelthree={jsonapi.get('enhancements').find(enh => enh.get('name') === 'Good Label')} />}
        {<GetMoreMissions jsonapi={jsonapi} />}
        {<LoyalCrewGoal jsonapi={jsonapi} />}
        {<DolceVitaGoal jsonapi={jsonapi} />}
      </div>
    );
  }
}

IntermediateGoal.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default IntermediateGoal;
