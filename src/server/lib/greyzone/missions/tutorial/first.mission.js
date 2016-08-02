import defaultActiveMission from '../default/defaultactivemission';
import immutable from 'immutable';
import stateMerger from '../../../merger';
import AgentInTrouble from '../default/agent.in.trouble';

const FirstMission = immutable.fromJS(defaultActiveMission)
  .mergeWith(stateMerger, immutable.fromJS(AgentInTrouble[0]))
  .set('firstmission', true);

export default FirstMission;
