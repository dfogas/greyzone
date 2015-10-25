/*
  Smart Component
*/
import './agentscrollbarnavbutton.styl';
import * as scrollbarActions from './actions';
import Component from '../../components/component.react.js';
import immutable from 'immutable';
import React from 'react';
import classnames from 'classnames';

class AgentScrollBarNavButton extends Component {
  scrollleft() {
    scrollbarActions.scrollLeft();
  }

  scrollright() {
    scrollbarActions.scrollRight();
  }

  render() {
    const {pendingActions} = this.props,
      orientation = this.props.data.orientation;

    return (
      <div
        className={classnames('agent-scroll-bar-nav-button ', orientation)}
        onClick={orientation === 'left' ? this.scrollleft : this.scrollright}
      >
      </div>
    );
  }
}

AgentScrollBarNavButton.propTypes = {
  data: React.PropTypes.object,
  pendingActions: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentScrollBarNavButton;