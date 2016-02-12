import './agentonmission.css';
import * as agentActions from '../../../agents/actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';
import AgentCard from '../../../agents/agentcard/agentcard.react';

class AgentOnMission extends Component {

  drop(ev) {
    const {activemission} = this.props;
    const agentsonmission = activemission.get('agentsonmission');
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    if (agentsonmission.indexOf(agentsonmission.find(agent => agent.get('name') === data)) === -1)
      return;

    if (!activemission.getIn(['mission', 'currenttask', 'agentontask']))
      agentActions.assignTask(agentsonmission.find(agent => agent.get('name') === data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {activemission} = this.props;
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);

    return (
      <div id='AgentOnMission' onDragOver={this.allowDrop} onDrop={this.drop.bind(this)}>
        {!!agentontask &&
          <AgentCard
           agent={agentontask}
           isShowcased={true}
           />
        }
        {!agentontask &&
          msg('tutorial.agentonmission')}
      </div>
    );
  }
}

AgentOnMission.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List)
};

export default AgentOnMission;
