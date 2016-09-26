import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import * as optionsActions from '../dashboard/optionswindow/actions';
import * as briefingActions from './actions';

class QuickSave extends Component {
  render() {
    const {jsonapi} = this.props;
    return (
      <div
        id='BriefingQuickSave'
        onClick={(e) => {
          optionsActions.saveGame(jsonapi, 1);
          briefingActions.flashBriefing(`Saved to savegame slot 1`);
        }}
        >
        <div id='BriefingQuickSaveText'>Quicksave 1</div>
      </div>
    );
  }
}

QuickSave.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default QuickSave;
