import './window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import missionWindowResults from '../../lib/bml/missionwindowresults';
import {msg} from '../../intl/store';
import icon from '../../lib/bml/determiningicon';
import oQ from '../../lib/bml/obscurityquality';
import rQ from '../../lib/bml/reputationquality';
import $ from 'jquery';

import MissionEndButton from '../agentstier/buttons/missionendbutton.react';

class MissionResultsWindow extends Component {
  // vszuuut() {
  //   // console.log('vžút');
  //   // console.log(React.findDOMNode(this));
  //   // Works!
  //   $(React.findDOMNode(this)).hide().slideDown().show();
  // }

  render() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const agentKIA = activemission.get('agentsonmission').find(agent => agent.get('KIA'));
    const agentPrison = activemission.get('agentsonmission').find(agent => agent.get('prison'));
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
              `${activemission.get('agentsonmission').get(0).get('name')} escaped the pursuers.`
            }</p>}
          {activemission.get('tag') === 'discovered' && result === 'fail' && !damageprotocol &&
            <p>{
              `${activemission.get('agentsonmission').get(0).get('name')} got caught.`
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
            <li className='mission-result-fatal'>{`Agent ${agentPrison.get('name')} has been imprisoned.`}</li>}
          {!damageprotocol && (result === 'fail' && losses.keySeq().find(key => key === 'agentImprisoned')) &&
            <li className='mission-result-fatal'>{`Agent ${agentPrison.get('name')} has been imprisoned.`}</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentKilled')) &&
            <li className='mission-result-fatal'>{`Agent ${agentKIA.get('name')} has been killed.`}</li>}
          {(result === 'fail' && losses.keySeq().find(key => key === 'agentKilled')) &&
            <li className='mission-result-fatal'>{`Agent ${agentKIA.get('name')} has been killed.`}</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentRecruited')) &&
            <li className='mission-result-fatal'>Agent has been recruited.</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentFreed')) &&
            <li>{`Agent ${jsonapi.get('agents').get(0).get('name')} freed from prison!!`}</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'agentLoyal')) &&
            <li>Agent changed loyalty to you.</li>}
          {(result === 'fail' && losses.keySeq().find(key => key === 'agentLoyal')) &&
            <li>Agent changed loyalty to you.</li>}
          {(result === 'success' && rewards.keySeq().find(key => key === 'artPieceGained')) &&
            <li>You stole yourself an Art Piece!</li>}
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
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultsWindow;
