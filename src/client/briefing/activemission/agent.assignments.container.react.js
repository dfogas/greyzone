import './agent.assignments.container.styl';
import * as briefingActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class AgentAssignmentsContainer extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    const {jsonapi} = this.props;
    const agents = jsonapi.get('agents');
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');

    if (jsonapi.getIn(['dashboard', 'countryofoperation']) === jsonapi.getIn(['activemission', 'inCountry']))
      briefingActions.assignMission(agents.find(agent => agent.get('name') === data));
    else
      briefingActions.flashBriefing(`You are not in the country.`);
  }

  render() {
    return (
      <div
        id='AgentAssignmentsContainer'
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}>
      </div>
    );
  }
}

AgentAssignmentsContainer.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentAssignmentsContainer;
