import './playerswindow.styl';
import '../../lib/formatmoney';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class PlayersWindow extends Component {
  buyContacts() {
    dashboardActions.buyContacts();
  }

  render() {
    const {gameCash, gameContacts, name} = this.props;
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
            Cash: {gameCash.formatMoney(0, '.', ',')}$
          </span>
          <br />
          <span className='gameContacts-counter'>
            Contacts: {gameContacts}
          </span>
          <button
            className='buy10Contacts'
            onClick={this.buyContacts}
            >
            Buy 10 contacts for 1,000$
          </button>
        </div>
      </div>
    );
  }
}

PlayersWindow.propTypes = {
  gameCash: React.PropTypes.number,
  gameContacts: React.PropTypes.number,
  name: React.PropTypes.string
};

export default PlayersWindow;
