import './window.styl';
import Component from '../../components/component.react';
import React from 'react';
import isFatal from '../../lib/isfatal';
import immutable from 'immutable';
import uuid from '../../lib/guid';
import {msg} from '../../intl/store';
import icon from '../../lib/determiningicon';
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
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const agentbeingsaved = jsonapi.get('agentbeingsaved');
    const result = activemission.get('result');
    const rewards = activemission.get('rewards');
    const losses = activemission.get('losses');
    const results = losses.merge(rewards);
    const tutorial = jsonapi.get('tutorial');

    // console.log('Fatal: ' + isFatal(losses, rewards));
    // console.log('Agent Recruited: ' + rewards.keySeq().filter(key => key === 'agentRecruited').toList().size);
    // console.log(rewards.keySeq().size);

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
            {results.keySeq().filter(key => key === 'gameCash').toList().size !== 0 &&
              `${icon('gameCash')}${jsonapi.get('gameCash')}`}
            {results.keySeq().filter(key => key === 'gameCash').toList().size !== 0 &&
              `  ${icon('gameContacts')}${jsonapi.get('gameContacts')}`}
          </p>
          <p>
            {result === 'success' &&
              <ul>
                {rewards.keySeq().map(key => {
                  return (
                    <li key={uuid() + 'missionreward'}>{`${icon(key)}${rewards.get(key)}`} has been gained.</li>
                  );
                })}
              </ul>}
            {result === 'fail' &&
              <ul>Results of Mission:
                {losses.keySeq().map(key => {
                  return (
                    <li key={uuid() + 'missionloss'}>{`${icon(key)}${losses.get(key)}`} has been lost.</li>
                  );
                })}
              </ul>}
          </p>
          {rewards.keySeq().filter(key => key === 'agentImprisoned').toList().size !== 0 &&
            <li className='mission-result-fatal'>Agent has been imprisoned.</li>}
          {losses.keySeq().filter(key => key === 'agentImprisoned').toList().size !== 0 &&
            <li className='mission-result-fatal'>Agent has been imprisoned.</li>}
          {rewards.keySeq().filter(key => key === 'agentKilled').toList().size !== 0 &&
            <li className='mission-result-fatal'>Agent has been killed.</li>}
          {losses.keySeq().filter(key => key === 'agentKilled').toList().size !== 0 &&
            <li className='mission-result-fatal'>Agent has been killed.</li>}
          {rewards.keySeq().filter(key => key === 'agentRecruited').toList().size !== 0 &&
            <li className='mission-result-fatal'>Agent has been recruited.</li>}
          {rewards.keySeq().filter(key => key === 'agentFreed').toList().size !== 0 &&
            <li>Agent freed from prison!</li>}
          {rewards.keySeq().filter(key => key === 'agentLoyal').toList().size !== 0 &&
            <li>Agent changed loyalty to you.</li>}
          {losses.keySeq().filter(key => key === 'agentLoyal').toList().size !== 0&&
            <li>Agent changed loyalty to you.</li>}
          {rewards.keySeq().filter(key => key === 'artPieceGained').toList().size !== 0 &&
            <li>You stole yourself an Art Piece!</li>}
          <MissionEndButton
            jsonapi={jsonapi}
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
