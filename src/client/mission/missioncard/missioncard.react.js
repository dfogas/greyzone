/*
  Smart Component
*/
import './missioncard.styl';
import * as missionActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import MissionTitle from './missiontitle.react';
import Task from './tasks/task.react';

class MissionCard extends Component {
  select() {
    const {mission} = this.props;
    missionActions.select(mission);
  }

  render() {
    const {mission} = this.props;
    const inCountry = mission.get('inCountry');
    let classString = '';
    let isBriefing = false;
    let isSpecial = false;

    if (this.props.isBriefing) {
      classString += ' briefing';
      isBriefing = true;
    }
    if (this.props.isSpecial) {
      classString += ' special';
      isSpecial = true;
    }

    if (mission)
      var tasks = mission.get('tasks');

    if (!mission)
      var missioncardcontent = 'Select mission from left or right by clicking its title.';
    else
      missioncardcontent = tasks.map((task, i) => {
        return (
          <Task
            isBriefing={isBriefing}
            isSpecial={isSpecial}
            task={mission.get('tasks').get(i)}
          />
        );
      });

    return (
      <div className={'mission-card' + classString} onClick={this.select.bind(this)}>
        <MissionTitle isBriefing={isBriefing} isSpecial={isSpecial} mission={mission} title={mission ? mission.get('title') : msg('mission.title')} />
        {missioncardcontent}
        {!!inCountry &&
          <div className='mission-locale'>{inCountry}</div>}
      </div>
    );
  }
}

MissionCard.propTypes = {
  isActual: React.PropTypes.bool,
  isBriefing: React.PropTypes.bool,
  isSpecial: React.PropTypes.bool,
  mission: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionCard;
