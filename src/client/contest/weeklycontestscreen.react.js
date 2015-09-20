import './contest.css';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import ContestTitle from './contesttitle.react';
import PlayersList from './playerslist.react';
import FilterButtonsLayout from './filterbuttonslayout.react';
import Navbar from '../buttons/navbar.react';

class WeeklyContestScreen extends Component {
  render() {
    const {contest, pendingActions} = this.props;

    return (
      <div id='WeeklyContestScreen'>
        <Navbar placement='left' />
        <ContestTitle />
        <PlayersList players={contest} />
        <FilterButtonsLayout />
        <Navbar placement='right' />
      </div>
    );
  }
}

WeeklyContestScreen.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List),
  pendingActions: React.PropTypes.instanceOf(immutable.Map)
};

export default WeeklyContestScreen;
