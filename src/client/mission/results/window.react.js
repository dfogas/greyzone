import './window.styl';
import * as briefingActions from '../../briefing/actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import icon from '../../lib/bml/determiningicon';
import obscurityDeflect from '../../lib/bml/obscuritydeflect';

import MissionResultsCountryProfile from './country.profile.react';
import MissionEndButton from '../agentstier/buttons/missionendbutton.react';
import MissionResults from './results.react';
import MissionResultsFatal from './fatal.react';
import MissionResultsChaining from './chaining.react';

class MissionResultsWindow extends Component {
  componentDidMount() {
    const {jsonapi} = this.props;
    socket.on('new mission', (gamemission) => { // eslint-disable-line no-undef
      console.log('recieved new mission from server'); // eslint-disable-line no-console
      if (!obscurityDeflect(jsonapi))
        briefingActions.pushGameMission(gamemission);
      else console.log('je to v klidu'); // eslint-disable-line no-console
    });
  }

  render() {
    const {game, jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const damageprotocol = activemission.get('equipmenteffects').get('damageprotocol');
    const result = activemission.get('result');
    const rewards = activemission.get('rewards');
    // const results = losses.merge(rewards);
    const tutorial = jsonapi.get('tutorial');

    return (
      <div id="MissionResultsWindow">
          {activemission.get('tag') === 'discovered' && result === 'success' &&
            <p>{`${activemission.getIn(['agentsonmission', 0, 'name'])} escaped the pursuers.`}</p>}
          {activemission.get('tag') === 'discovered' && result === 'fail' && !damageprotocol &&
            <p>{`${activemission.getIn(['agentsonmission', 0, 'name'])} got caught.`}</p>}
          <p>{`Mission ${activemission.get('title')}
              in ${activemission.get('inCountry')}
              has been a ${activemission.get('result')}.`}</p>
          <MissionResults
            jsonapi={jsonapi}
            />
          <MissionResultsFatal
            game={game}
            jsonapi={jsonapi}
            />
          {(result === 'success' && rewards.keySeq().find(key => key === 'artPieceGained')) &&
            <li className='mission-result-special-other'>You stole yourself an Art Piece!</li>}
          <p>
            Your resources ATM are:
            {/*results.keySeq().filter(key => key === 'gameCash').toList().size !== 0 && */
              `${icon('gameCash')}${jsonapi.get('gameCash')}`}
            {/*results.keySeq().filter(key => key === 'gameCash').toList().size !== 0 && */
              `  ${icon('gameContacts')}${jsonapi.get('gameContacts')}`}
          </p>
          <MissionResultsCountryProfile
            jsonapi={jsonapi}
            />
          <MissionResultsChaining
            jsonapi={jsonapi}
            />
          <MissionEndButton
            jsonapi={jsonapi}
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
