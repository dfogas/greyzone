import './missionendbutton.styl';
import * as briefingActions from '../../../briefing/actions';
import Component from '../../../components/component.react';
import React from 'react';
import {msg} from '../../../intl/store';
import * as dashboardActions from '../../../dashboard/actions';
import * as missionActions from '../../actions';
import * as tutorialActions from '../../../tutorial/actions';
import immutable from 'immutable';
// var io = require('socket.io-client');

class MissionEndButton extends Component {
  end() {
    const {jsonapi, mission, tutorial} = this.props;
    const missionjs = mission.toJS();
    // in order to actualize agentondisplay
    // TODO: there must be some easy way to actualize the state of agent on display, gotta find it or else write function
    socket.emit('mission', missionjs); // eslint-disable-line no-undef
    socket.on('new mission', (gamemission) => { // eslint-disable-line no-undef
      const countrystats = jsonapi.get('countrystats');
      const countrystat = jsonapi.getIn(['countrystats', countrystats.indexOf(countrystats.find(countrystat => countrystat.get('name') === gamemission.inCountry))]);
      // console.log('checking for obscurity save');
      var probability = Math.random();
      var border = 1 / (1 + countrystat.get('obscurity'));
      var chance = probability < border;
      console.log('border is' + border);
      console.log('probability is ' + probability);
      console.log('chance is ' + chance);
      if (chance && gamemission.title === 'Discovered!')
        this.pushGameMission(gamemission);
      else if (gamemission.title !== 'Discovered!')
        this.pushGameMission(gamemission);
      else
        setTimeout(briefingActions.flashBriefing('saved by obscurity'), 1000);
    });
    missionActions.end();
    if (tutorial && !tutorial.getIn(['firstmission', 'done']))
      tutorialActions.firstMissionDone();
    missionActions.removeCompletedMission();
    missionActions.agentsAreBackFromMission();
    missionActions.setDefault();
    window.history.back();
  }

  pushGameMission(mission) {
    // puts game pushed mission on top of mission list
    briefingActions.pushGameMission(mission);
  }

  render() {
    return (
      <input
        id='MissionEndButton'
        onClick={this.end.bind(this)}
        type='button'
        value={msg('mission.buttons.end')}
        />
    );
  }
}

MissionEndButton.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  mission: React.PropTypes.instanceOf(immutable.Map),
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionEndButton;
