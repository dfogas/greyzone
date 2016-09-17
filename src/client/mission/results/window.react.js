import './window.styl';
import * as missionActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import missionWindowResults from '../../lib/bml/missionwindowresults';
// import {msg} from '../../intl/store';
import icon from '../../lib/bml/determiningicon';
import prop from '../../lib/general/r.i.prop';
import oQ from '../../lib/bml/obscurityquality';
import rQ from '../../lib/bml/reputationquality';
// import $ from 'jquery';

import MissionEndButton from '../agentstier/buttons/missionendbutton.react';
import AgentCard from '../../agents/agentcard/agent.card.react';

class MissionResultsWindow extends Component {
  // vszuuut() {
  //   // console.log('vžút');
  //   // console.log(React.findDOMNode(this));
  //   // Works!
  //   $(React.findDOMNode(this)).hide().slideDown().show();
  // }

  render() {
    const {game, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const agentKIA = activemission.get('agentsonmission').find(agent => agent.get('KIA'));
    const agentPrison = activemission.get('agentsonmission').find(agent => agent.get('prison'));
    const eventsCI = jsonapi.get('events').indexOf(jsonapi.get('events').find(jsev => jsev.get('country') === activemission.get('inCountry')));
    const damageprotocol = activemission.get('equipmenteffects').get('damageprotocol');
    const result = activemission.get('result');
    const rewards = activemission.get('rewards');
    const losses = activemission.get('losses');
    // const results = losses.merge(rewards);
    const tutorial = jsonapi.get('tutorial');

    // // console.log('Fatal: ' + isFatal(losses, rewards));
    // console.log('Agent Recruited: ' + rewards.keySeq().filter(key => key === 'agentRecruited').toList().size);
    // console.log(rewards.keySeq().size);
    //

    return (
      <div id="MissionResultsWindow">
          {activemission.get('tag') === 'discovered' && result === 'success' &&
            <p>{
              `${activemission.getIn(['agentsonmission', 0, 'name'])} escaped the pursuers.`
            }</p>}
          {activemission.get('tag') === 'discovered' && result === 'fail' && !damageprotocol &&
            <p>{
              `${activemission.getIn(['agentsonmission', 0, 'name'])} got caught.`
            }</p>}
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
                {missionWindowResults(jsonapi)}
              </ul>}
            {result === 'fail' &&
              <ul>
                {missionWindowResults(jsonapi)}
              </ul>}
          </p>
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentImprisoned')) &&
            <li className='mission-result-fatal'>{`Agent ${prop('name', agentPrison)} has been imprisoned.`}</li>}
          {!damageprotocol && (result === 'fail' && losses.keySeq().find(key => key === 'agentImprisoned')) &&
            <li className='mission-result-fatal'>{`Agent ${prop('name', agentPrison)} has been imprisoned.`}</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentKilled')) &&
            <li className='mission-result-fatal'>{`Agent ${prop('name', agentKIA)} has been killed.`}</li>}
          {(result === 'fail' && losses.keySeq().find(key => key === 'agentKilled')) &&
            <li className='mission-result-fatal'>{`Agent ${prop('name', agentKIA)} has been killed.`}</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentRecruited')) &&
            <li className='mission-result-fatal'>Agent can be recruited.</li>}
          {activemission.get('agentrecruited') &&
            <div>
              <button
                id='RecruitAgentToggleButton'
                onClick={(e) => missionActions.recruitAgentToggle(activemission.get('agentrecruited'))}>
                {jsonapi.get('agents').find(ag => ag.get('id') === activemission.getIn(['agentrecruited', 'id']))
                ? `Don't Recruit`
                : `Recruit`}</button>
              {<div id='RecruitAgentStatus'>
                {jsonapi.get('agents').find(ag => ag.get('id') === activemission.getIn(['agentrecruited', 'id']))
                  ? `Agent is currently joining you.`
                  : `Agent isn't joining you now.`
                }
              </div>}
              <AgentCard
                agent={activemission.get('agentrecruited')}
                game={game}
                isRecruit={true}
                jsonapi={jsonapi}
                />
            </div>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentFreed')) &&
            <li className='mission-result-special-other'>{`Agent ${jsonapi.get('agents').get(0).get('name')} freed from prison!!`}</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentLoyal')) &&
            <li className='mission-result-special-other'>Agent changed loyalty to you.</li>}
          {(result === 'fail' && losses.keySeq().find(key => key === 'agentLoyal')) &&
            <li className='mission-result-special-other'>Agent changed loyalty to you.</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'artPieceGained')) &&
            <li className='mission-result-special-other'>You stole yourself an Art Piece!</li>}
          <p>
            Your resources ATM are:
            {/*results.keySeq().filter(key => key === 'gameCash').toList().size !== 0 && */
              `${icon('gameCash')}${jsonapi.get('gameCash')}`}
            {/*results.keySeq().filter(key => key === 'gameCash').toList().size !== 0 && */
              `  ${icon('gameContacts')}${jsonapi.get('gameContacts')}`}
          </p>
          <p>
            {`You are currently ${oQ(jsonapi.get('countrystats').find(cs => (activemission.get('inCountry') || 'US') === cs.get('name')).get('obscurity'))}
            during your operations in ${activemission.get('inCountry')}.`}
          </p>
          <p>
            {`Your results and reputation in ${activemission.get('inCountry')} are
              ${rQ(jsonapi.get('countrystats').find(cs => (activemission.get('inCountry') || 'US') === cs.get('name')).get('reputation'))}.`}
          </p>
          <p>
            {`The attention level of authorities and competition to your activities in ${activemission.get('inCountry')}
              is ${jsonapi.getIn(['events', eventsCI, 'level'])} which might be of some concern.`}
          </p>
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
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultsWindow;
