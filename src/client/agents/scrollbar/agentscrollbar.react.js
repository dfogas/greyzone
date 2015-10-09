import './agentscrollbar.css';
import * as agentActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames/dedupe';

import AgentCard from '../agentcard/agentcard.react';

class AgentScrollBar extends Component {

  drop(ev) {
    ev.preventDefault(ev);

    const {jsonapi, activemission} = this.props;
    const agentinarmory = jsonapi.get('agentinarmory');
    const agentontask = activemission.getIn(['mission', 'currenttask', 'agentontask']);
    const agents = jsonapi.get('agents');
    const agentsonmission = activemission.get('agentsonmission');
    const missionstarted = activemission.get('started');
    var data = ev.dataTransfer.getData('text');

    if (!agents.size) {
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

    if (missionstarted)
      return;

    if (agentinarmory)
      agentActions.backtoRoster(agentinarmory);

    else if (!agentontask)
      agentActions.backtoRoster(agentsonmission.find(agent => agent.get('name') === data));

    if (agentontask && !missionstarted)
      agentActions.backtoAssignment(agentontask);

  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {agents, jsonapi, style} = this.props;

    let classString = '';
    let isMission = false;

    if (this.props.isMission) {
      classString += ' on-mission';
      isMission = true;
    }

    if (!agents.size)
      return (
        <span>AgentList is empty</span>
      );

    return (
      <ul
        className={classString}
        id='AgentList'
        isMission={isMission}
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        style={style}
      >
        {agents.map((agent, i) => {
          return (
            <AgentCard
              agent={agent}
              agentindex={i}
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
