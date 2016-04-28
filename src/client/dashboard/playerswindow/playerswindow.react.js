import './playerswindow.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import topLevelOps from '../../lib/toplevelops';
import topLevelTraining from '../../lib/topleveltraining';

class PlayersWindow extends Component {
  buyContacts() {
    dashboardActions.buyContacts();
  }

  render() {
    const {gameCash, gameContacts, enhancements, name} = this.props;
    return (
      <div id='PlayersWindow'>
        <div id='PlayerPicture'>
        </div>
        <div id='PlayerLabel'>
          <div id='PlayerName'>
            {name}
          </div>
        </div>
        <div id='PlayerLiquidResources'>
          <span className='gameCash-counter'>
            Cash: {formatMoney(gameCash, 0, '.', ',')}$
          </span>
          <br />
          <span className='gameContacts-counter'>
            Contacts: {gameContacts}
          </span>
        </div>
        <div id='PlayerOperationsCapability'>
          Operations: {topLevelOps(enhancements)}
        </div>
        <div id='PlayerAgentsLeadership'>
          Agents: {topLevelTraining(enhancements)}
        </div>
      </div>
    );
  }
}

PlayersWindow.propTypes = {
  enhancements: React.PropTypes.object,
  gameCash: React.PropTypes.number,
  gameContacts: React.PropTypes.number,
  name: React.PropTypes.string
};

export default PlayersWindow;
