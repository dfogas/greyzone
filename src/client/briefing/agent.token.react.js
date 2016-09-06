import './agent.token.styl';
import React from 'react';
import Component from '../components/component.react.js';
import immutable from 'immutable';
import classnames from 'classnames';
import formattedImg from '../lib/bml/formattedimg';
import prop from '../lib/general/r.i.prop';

class AgentToken extends Component {
  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  render() {
    const {agent/*, jsonapi*/} = this.props;
    const isLoyal = prop('loyalty', agent) === 'loyal';

    return (
      <div
        className={classnames('agent-token', {'istalk': this.props.isTalk})}
        draggable='true'
        id={prop('name', agent)}
        onDragStart={this.drag}
        style={{backgroundImage: `url(../${formattedImg(isLoyal, false, agent)})`}}>
      </div>
    );
  }
}

AgentToken.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map).isRequired,
  isTalk: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentToken;
