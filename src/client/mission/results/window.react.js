import './window.styl';
import Component from '../../components/component.react';
import React from 'react';
import isFatal from '../../lib/isfatal';
import immutable from 'immutable';
import uuid from '../../lib/guid';
import {msg} from '../../intl/store';
import $ from 'jquery';

import MissionEndButton from '../agentstier/buttons/missionendbutton.react';

class MissionResultsWindow extends Component {
  vszuuut() {
    // console.log('vžút');
    // console.log(React.findDOMNode(this));
    // Works!
    $(React.findDOMNode(this)).hide().slideDown().show();
  }

  render() {
    const {activemission, agentbeingsaved, tutorial} = this.props;
    const result = activemission.get('result');
    const rewards = activemission.get('rewards');
    const losses = activemission.get('losses');
    const rewardsjs = activemission.get('rewards') ? activemission.get('rewards').toJS() : {};
    const lossesjs = activemission.get('losses') ? activemission.get('losses').toJS() : {};

    return (
      <div
        id="MissionResultsWindow"
        onClick={this.vszuuut.bind(this)}>
          <p>
            {
              `Mission ${activemission.get('title')}
              in ${activemission.get('inCountry')}
              has been a ${activemission.get('result')}.`
            }
          </p>
          <p>
            {result === 'success' &&
              <ul>
                {rewards.keySeq().map(key => {
                  return (
                    <li key={uuid() + 'missionreward'}>{`${key} : ${rewards.get(key)}`}</li>
                  );
                })}
              </ul>}
            {result === 'fail' &&
              <ul>Results of the mission:
                {losses.keySeq().map(key => {
                  return (
                    <li key={uuid() + 'missionloss'}>{`${key} : ${losses.get(key)}`}</li>
                  );
                })}
              </ul>}
          </p>
          {result === 'success' &&
            <p>has been gained.</p>}
          {result === 'fail' &&
            <p>has been lost.</p>}
          {isFatal(losses, rewards) &&
            <p>Fatal Consequences of Mission:
              {rewards.keySeq().filter(key => key === 'agentImprisoned').size &&
                <li>Agent has been imprisoned.</li>}
              {Object.keys(lossesjs).indexOf('agentImprisoned') !== -1 &&
                <li>Agent has been imprisoned.</li>}
              {Object.keys(rewardsjs).indexOf('agentKilled') !== -1 &&
                <li>Agent has been killed.</li>}
              {Object.keys(lossesjs).indexOf('agentKilled') !== -1 &&
                <li>Agent has been killed.</li>}
            </p>}
          <p>
            {result === 'success' && Object.keys(rewardsjs).indexOf('agentFreed') !== -1 &&
              <li>Agent freed from prison!</li>}
            {result === 'success' && Object.keys(rewardsjs).indexOf('agentLoyal') !== -1 &&
              <li>Agent changed loyalty to you.</li>}
            {result === 'fail' && Object.keys(lossesjs).indexOf('agentLoyal') !== -1 &&
              <li>Agent changed loyalty to you.</li>}
            {result === 'success' && Object.keys(rewardsjs).indexOf('artPieceGained') !== -1 &&
              <li>You stole yourself an Art Piece!</li>}
          </p>
          <p>Click button to return to previous screen (i.e. Briefing or possibly Dashboard).</p>
          <MissionEndButton
            mission={activemission}
            tutorial={tutorial}
            />
      </div>
    );
  }
}

MissionResultsWindow.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultsWindow;
