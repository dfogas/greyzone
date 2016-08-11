/* DumbComponent */
import './agentscrollbarnavbutton.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';

class AgentScrollBarNavButton extends Component {
  forward() {
    this.props.parentCallback();
  }

  render() {
    const {agents, isMission, jsonapi, style} = this.props;
    const orientation = this.props.data.orientation;
    const classString = classnames('agent-scroll-bar-nav-button', orientation, {
      'briefing': this.props.isBriefing,
      'on-mission': this.props.isMission
    });
    // console.log((agents.size - 3) * -264);

    // opacity setting
    const navStyle = function(pointing, isM) {
      if ((isM && jsonapi.getIn(['activemission', 'agentsonmission']).size > 1))
        return pointing === 'left' ? (style.get('left') === 0 ? {opacity: 0} : {opacity: 1}) : (style.get('left') > ((agents.size - 1) * -264) ? {opacity: 1} : {opacity: 0});
      else return pointing === 'left' ? (style.get('left') === 0 ? {opacity: 0} : {opacity: 1}) : (style.get('left') > ((agents.size - 3) * -264) ? {opacity: 1} : {opacity: 0});
    };

    return (
      <div
        className={classString}
        onClick={this.forward.bind(this)}
        style={navStyle(orientation, isMission)}
      >
      </div>
    );
  }
}

AgentScrollBarNavButton.propTypes = {
  agents: React.PropTypes.instanceOf(immutable.List),
  data: React.PropTypes.object,
  isBriefing: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  parentCallback: React.PropTypes.func,
  style: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentScrollBarNavButton;
