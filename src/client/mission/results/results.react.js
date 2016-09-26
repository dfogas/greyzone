import Component from '../../components/component.react'; //
import React from 'react';
import immutable from 'immutable';
import missionWindowResults from '../../lib/bml/missionwindowresults';

class MissionResults extends Component {
  render() {
    const {jsonapi} = this.props;
    const result = jsonapi.getIn(['activemission', 'result']);
    return (
      <div className='mission-results'>
        {result === 'success' &&
          <ul>{missionWindowResults(jsonapi)}</ul>}
        {result === 'fail' &&
          <ul>{missionWindowResults(jsonapi)}</ul>}
      </div>
    );
  }
}

MissionResults.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResults;
