import * as talkEnhancementsActions from '../../talk/enhancements/actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import topLevelTraining from '../../lib/bml/topleveltraining';

class PlayerAgentsLeadership extends Component {
  render() {
    const {jsonapi} = this.props;
    return (
      <div
        id='PlayerAgentsLeadership'
        onClick={(e) => talkEnhancementsActions.trainingUpgradeDialogToggle()}>
        {topLevelTraining(jsonapi.get('enhancements'))}
      </div>
    );
  }
}

PlayerAgentsLeadership.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default PlayerAgentsLeadership;
