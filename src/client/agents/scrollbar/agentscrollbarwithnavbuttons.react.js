/*
  Dumb Component
*/
import './agentscrollbarwithnavbuttons.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import AgentScrollBar from './agentscrollbar.react';
import AgentScrollBarNavButton from './agentscrollbarnavbutton.react';

class AgentScrollBarWithNavButtons extends Component {

  render() {
    const {agents, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const agentsbstyle = jsonapi.getIn(['componentsstates', 0, 'componentstyle']);
    const agentsbstyletojs = agentsbstyle.toJS();

    var classString = '';
    var isMission = false;
    if (this.props.isMission) {
      classString += ' on-mission';
      isMission = true;
    }
    if (this.props.isBriefing)
      classString += ' briefing';

    return (
      <div className={classString} id='AgentScrollBarWithNavButtons' >
        <AgentScrollBarNavButton
          data={{orientation: 'left'}}
          />
        <div className={'agent-scroll-bar' + classString}>
          <AgentScrollBar
            activemission={activemission}
            agents={agents}
            className={classString}
            isMission={isMission}
            jsonapi={jsonapi}
            style={agentsbstyletojs}
            />
        </div>
        <AgentScrollBarNavButton
          data={{orientation: 'right'}}
          />
      </div>
    );
  }
}

AgentScrollBarWithNavButtons.propTypes = {
  agents: React.PropTypes.instanceOf(immutable.List).isRequired,
  isBriefing: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentScrollBarWithNavButtons;
