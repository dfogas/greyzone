/*
  Dumb Component
*/
import './agentscrollbarwithnavbuttons.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames';

import AgentScrollBar from './agentscrollbar.react';
import AgentScrollBarNavButton from './agentscrollbarnavbutton.react';

class AgentScrollBarWithNavButtons extends Component {

  render() {
    const {isBriefing, isMission, jsonapi} = this.props;
    const agentsbstyle = isBriefing ? jsonapi.getIn(['components', 'agentscrollbar', 'briefing']) :
      isMission ? jsonapi.getIn(['components', 'agentscrollbar', 'mission']) :
      jsonapi.getIn(['components', 'agentscrollbar', 'armory']);
    const agentsbstyletojs = agentsbstyle ? agentsbstyle.toJS() : agentsbstyle;
    const classString = classnames('agent-scroll-bar', {
      'briefing': this.props.isBriefing,
      'on-mission': this.props.isMission
    });

    return (
      <div className={classString} id='AgentScrollBarWithNavButtons' >
        <AgentScrollBarNavButton
          data={{orientation: 'left'}}
          isBriefing={this.props.isBriefing}
          isMission={this.props.isMission}
          />
        <div className={classString}>
          <AgentScrollBar
            agents={isMission ? jsonapi.getIn(['activemission', 'agentsonmission']) : jsonapi.get('agents')}
            className={classString}
            isBriefing={isBriefing}
            isMission={isMission}
            jsonapi={jsonapi}
            style={agentsbstyletojs}
            />
        </div>
        <AgentScrollBarNavButton
          data={{orientation: 'right'}}
          isBriefing={this.props.isBriefing}
          isMission={this.props.isMission}
          />
      </div>
    );
  }
}

AgentScrollBarWithNavButtons.propTypes = {
  isBriefing: React.PropTypes.bool.isRequired,
  isMission: React.PropTypes.bool.isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentScrollBarWithNavButtons;
