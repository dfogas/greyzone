import * as talkActions from '../talk/actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import topLevelOps from '../../lib/toplevelops';

class PlayerOperationsCapability extends Component {
  render() {
    const {jsonapi} = this.props;
    return (
      <div
        id='PlayerOperationsCapability'
        onClick={(e) => talkActions.operationsUpgradeDialogToggle()}
        >
        Operations: {topLevelOps(jsonapi.get('enhancements'))}
      </div>
    );
  }
}

PlayerOperationsCapability.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default PlayerOperationsCapability;
