import './window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import MissionEndButton from '../agentstier/buttons/missionendbutton.react';

class MissionResultsWindow extends Component {

  render() {
    return (
      <div
        id="MissionResultsWindow">
          <p>Some Text representing the results of mission.</p>
          <p>Failure or Success.</p>
          <p>Losses or Rewards (Cash, Contacts, Reputation, Obscurity).</p>
          <p>Some fatalities like Agent imprisoned, Agent killed.</p>
          <p>Some positive effects like Agent freed from prison, Collection piece gained.</p>
          <p>Agent loyalty changes as result as well.</p>
          <p>You will also be redirected back to previous screen i.e. Briefing or possibly Dashboard.</p>
          <MissionEndButton />
      </div>
    );
  }
}

export default MissionResultsWindow;
