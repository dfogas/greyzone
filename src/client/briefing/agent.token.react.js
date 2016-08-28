import './agent.token.styl';
// import * as agentsActions from '../agents/actions';
import React from 'react';
import Component from '../components/component.react.js';
import immutable from 'immutable';

class AgentToken extends Component {
  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  render() {
    const {agent, jsonapi} = this.props;
    return (
      <div
        className='agent-token'
        draggable='true'
        id={agent.get('name')}
        onDragStart={this.drag}
        style={{backgroundImage: `url(../${agent.get('imgsrc')})`}}>
      </div>
    );
  }
}

AgentToken.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentToken;
