import './missionendbutton.styl';
import * as briefingActions from '../../../briefing/actions';
import * as missionActions from '../../actions';
import * as tutorialActions from '../../../tutorial/actions';
import Component from '../../../components/component.react';
import React from 'react';
import {msg} from '../../../intl/store';
import immutable from 'immutable';
// import {Promise} from 'bluebird';
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
      window.history.back();
    });
  }

  handleMissionEnd(e) {
    e.preventDefault();
    // const {jsonapi} = this.props;
    // // socket.emit('mission', jsonapi.get('activemission').toJS()); // eslint-disable-line no-undef
    // socket.on('new mission', (gamemission) => { // eslint-disable-line no-undef
    //   console.log('recieved new mission from server');
    //   if (!obscurityDeflect(jsonapi))
    //     briefingActions.pushGameMission(gamemission);
    //   else console.log('je to v klidu');
    // });

    // socket.on('new mission', (gamemission) => { // eslint-disable-line no-undef
      // if (!obscurityDeflect(jsonapi)) {
      //   briefingActions.pushGameMission(gamemission);
      //   if (gamemission.title === 'Noticed')
      //     announce(`
      //       Your actions been noticed during your last mission. You'd better send an agent
      //       to make amends with the locals, so that they do not rat you out.
      //       - New Mission: Noticed - in Briefing Room`,
      //       'Briefing'
      //     );
      //   else announce(
      //     `Police enforcement force spotted you during your last mission.
      //     You need to send agent to make escape from their clutches possible.
      //     - New Mission: Discovered - in Briefing Room`,
      //     'Briefing'
      //   );
      // } else announce(
      //   `It seems that someone has been watching you during your last mission.
      //     In the end, nothing happened thanks to the precautions that you took.`,
      //     'Briefing'
      //   );
    // });
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
          this.handleMissionEnd(e);
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
