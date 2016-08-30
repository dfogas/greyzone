import './missionendbutton.styl';
import * as briefingActions from '../../../briefing/actions';
// import * as dashboardActions from '../../../dashboard/actions';
import * as missionActions from '../../actions';
import * as tutorialActions from '../../../tutorial/actions';
import Component from '../../../components/component.react';
import React from 'react';
import {msg} from '../../../intl/store';
import immutable from 'immutable';
import $ from 'jquery';

class MissionEndButton extends Component {
  animateOut() {
    const {mission, tutorial} = this.props;
    $('#MissionResultsWindow').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      missionActions.end(mission);
      if (tutorial && !tutorial.getIn(['firstmission', 'done']))
        tutorialActions.firstMissionDone();
      missionActions.removeCompletedMission();
      missionActions.agentsAreBackFromMission();
      missionActions.setDefault();
    });
  }

  handleMissionEnd() {
    const {jsonapi, mission} = this.props;
    const missionjs = mission.toJS();
    socket.emit('mission', missionjs); // eslint-disable-line no-undef
    socket.on('new mission', (gamemission) => { // eslint-disable-line no-undef
      const countrystats = jsonapi.get('countrystats');
      const countrystat = jsonapi.getIn(['countrystats', countrystats.indexOf(countrystats.find(countrystat => countrystat.get('name') === gamemission.inCountry))]);
      var probability = Math.random();
      var border = 1 / (1 + 2 * countrystat.get('obscurity'));
      var chance = probability < border;
      if (chance)
        this.pushGameMission(gamemission);
      else
        setTimeout(briefingActions.flashBriefing('saved by obscurity'), 1000);
    });
  }

  pushGameMission(mission) {
    // puts game pushed mission on top of mission list
    briefingActions.pushGameMission(mission);
  }

  render() {
    return (
      <input
        id='MissionEndButton'
        onClick={(e) => {
          this.handleMissionEnd();
          this.animateOut();
        }}
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
