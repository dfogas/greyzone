/* DumbComponent */
import './agentscrollbarnavbutton.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import classnames from 'classnames';

class AgentScrollBarNavButton extends Component {
  forward() {
    this.props.parentCallback();
  }

  render() {
    const orientation = this.props.data.orientation;
    const classString = classnames('agent-scroll-bar-nav-button', orientation, {
      'briefing': this.props.isBriefing,
      'on-mission': this.props.isMission
    });

    return (
      <div
        className={classString}
        onClick={this.forward.bind(this)}
      >
      </div>
    );
  }
}

AgentScrollBarNavButton.propTypes = {
  data: React.PropTypes.object,
  isBriefing: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  parentCallback: React.PropTypes.func
};

export default AgentScrollBarNavButton;
