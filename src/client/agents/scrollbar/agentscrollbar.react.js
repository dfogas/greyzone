import './agentscrollbar.styl';
import * as agentActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames/dedupe';
import uuid from '../../lib/guid';

import AgentCard from '../agentcard/agentcard.react';

class AgentScrollBar extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault(ev);

    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const agentinarmory = jsonapi.get('agentinarmory');
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const agents = jsonapi.get('agents');
    const agentsonmission = activemission.get('agentsonmission');
    var data = ev.dataTransfer.getData('text');

    // agentcard classname change to adjust for different sizes
    if (!agents.size) {
      // why is that condition there?
      document.getElementById(data).className = classnames(document.getElementById(data).className, {showcased: false});
      var c = document.getElementById(data).children;
      var i, j;
      for (i = 0; i < c.length; i += 1) {
        c[i].className = classnames(c[i].className, {showcased: false});
        var cc = c[i].children;
        for (j = 0; j < cc.length; j += 1)
          cc[j].className = classnames(cc[j].className, {showcased: false});
      }
    }

    if (agentinarmory && agentinarmory.get('name') === data)
      agentActions.backfromArmory(agentinarmory);

    else if (agentsonmission.indexOf(agentsonmission.find(agent => agent.get('name') === data)) !== -1)
      agentActions.backtoRoster(agentsonmission.find(agent => agent.get('name') === data));

  }

  render() {
    const {agents, isMission, style} = this.props;

    if (!agents.size)
      return (
        <span>AgentList is empty</span>
      );

    return (
      <ul
        className={isMission ? ' on-mission' : ''}
        id='AgentList'
        isMission={isMission}
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        style={style}
      >
        {agents
          .filter(agent => agent.get('prison') !== true)
          .filter(agent => agent.get('KIA') !== true)
          .map((agent, i) => {
            return (
              <AgentCard
                agent={agent}
                agentindex={i}
                key={uuid() + agent.name}
              />
            );
          })}
      </ul>
    );
  }
}

AgentScrollBar.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  data: React.PropTypes.array,
  isMission: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  style: React.PropTypes.object
};

export default AgentScrollBar;
