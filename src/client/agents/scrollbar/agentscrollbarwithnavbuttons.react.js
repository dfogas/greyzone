import './agentscrollbarwithnavbuttons.styl';
import * as scrollbarActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames';

import AgentScrollBar from './agentscrollbar.react';
import AgentScrollBarNavButton from './agentscrollbarnavbutton.react'; //

class AgentScrollBarWithNavButtons extends Component {
  scrollleft() {
    const {isBriefing, isMission, jsonapi} = this.props;
    const context = isBriefing ? 'briefing' : isMission ? 'mission' : 'armory';
    if (jsonapi.getIn(['options', 'animations']))
      scrollbarActions.slideLeft(context);
    else
      scrollbarActions.scrollLeft(context);
  }

  scrollright() {
    const {isBriefing, isMission, jsonapi} = this.props;
    const context = isBriefing ? 'briefing' : isMission ? 'mission' : 'armory';
    if (jsonapi.getIn(['options', 'animations']))
      scrollbarActions.slideRight(context);
    else
      scrollbarActions.scrollRight(context);
  }

  render() {
    const {game, isBriefing, isMission, jsonapi} = this.props;
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
        {(jsonapi.get('agents').size > 3 || isMission) &&
          <AgentScrollBarNavButton
            agents={isMission ? jsonapi.getIn(['activemission', 'agentsonmission']) : jsonapi.get('agents')}
            data={{orientation: 'left'}}
            isBriefing={this.props.isBriefing}
            isMission={this.props.isMission}
            parentCallback={this.scrollleft.bind(this)}
            style={agentsbstyle}
            />}
        <div className={classString}>
          <AgentScrollBar
            agents={isMission ? jsonapi.getIn(['activemission', 'agentsonmission']) : jsonapi.get('agents')}
            className={classString}
            game={game}
            isAgents={this.props.isAgents}
            isBriefing={isBriefing}
            isMission={isMission}
            jsonapi={jsonapi}
            style={agentsbstyletojs}
            />
        </div>
        {(jsonapi.get('agents').size > 3 || isMission) &&
          <AgentScrollBarNavButton
            agents={isMission ? jsonapi.getIn(['activemission', 'agentsonmission']) : jsonapi.get('agents')}
            data={{orientation: 'right'}}
            isBriefing={this.props.isBriefing}
            isMission={this.props.isMission}
            parentCallback={this.scrollright.bind(this)}
            style={agentsbstyle}
            />}
      </div>
    );
  }
}

AgentScrollBarWithNavButtons.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  isAgents: React.PropTypes.bool,
  isBriefing: React.PropTypes.bool.isRequired,
  isMission: React.PropTypes.bool.isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentScrollBarWithNavButtons;
