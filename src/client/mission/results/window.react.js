import './window.styl';
import Component from '../../components/component.react';
import React from 'react';
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
    const {activemission, agentbeingsaved} = this.props;
    const result = activemission.get('result');
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
                {Object.keys(rewardsjs).map(key => {
                  return (
                    <li key={uuid() + 'missionreward'}>{`${key} : ${rewardsjs[key]}`}</li>
                  );
                })}
              </ul>}
            {result === 'fail' &&
              <ul>Results of the mission:
                {Object.keys(lossesjs).map(key => {
                  return (
                    <li key={uuid() + 'missionloss'}>{`${key} : ${lossesjs[key]}`}</li>
                  );
                })}
              </ul>}
          </p>
          <p>Fatal Consequences of Mission:
            {result === 'success' && Object.keys(rewardsjs).indexOf('agentImprisoned') !== -1 &&
              <li>Agent has been imprisoned.</li>}
            {result === 'fail' && Object.keys(lossesjs).indexOf('agentImprisoned') !== -1 &&
              <li>Agent has been imprisoned.</li>}
            {result === 'success' && Object.keys(rewardsjs).indexOf('agentKilled') !== -1 &&
              <li>Agent has been killed.</li>}
            {result === 'fail' && Object.keys(lossesjs).indexOf('agentKilled') !== -1 &&
              <li>Agent has been killed.</li>}
          </p>
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
            missiontitle={activemission.get('title')}
            />
      </div>
    );
  }
}

MissionResultsWindow.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultsWindow;
