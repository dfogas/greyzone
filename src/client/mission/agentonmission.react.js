import * as agentActions from '../agents/actions';
import Component from '../components/component.react';
import React from 'react';
// import classnames from 'classnames';
import AgentCard from '../agents/agentcard/agentcard.react';
import immutable from 'immutable';

class AgentOnMission extends Component {

  drop(ev) {
    const {activemission, agents} = this.props;
    const agentsonmission = activemission.get('agentsonmission');
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    if (agentsonmission.indexOf(agentsonmission.find(agent => agent.get('name') === data)) === -1)
      return;

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
      </div>
    );
  }
}

AgentOnMission.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List)
};

export default AgentOnMission;
