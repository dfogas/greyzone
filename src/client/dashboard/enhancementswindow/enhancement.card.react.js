import './enhancement.card.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
// import animate from '../../lib/animate';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';

class EnhancementCard extends Component {

  focusEnhancement(e) {}

  unfocusEnhancement(e) {}

  render() {
    const {enhancement, owned} = this.props;
    const description = enhancement.get('description');
    return (
      <div
        className={'enhancement-card' + (owned ? ' owned' : '')}
        id={enhancement.get('name').replace(/\s+/g, '')}
        onMouseLeave={(e) => {if (!owned) this.unfocusEnhancement(e); }}
        onMouseOver={(e) => {if (!owned) this.focusEnhancement(e); }}
        >
        <div>{enhancement.get('name')}</div>
        {true &&
          <div><em>{description}</em></div>}
        {owned &&
          <div><small>Owned</small></div>}
        {!owned &&
          <div>${formatMoney(enhancement.getIn(['price', 'cash']), 0, '.', ',')}{'\u{1f575}'}{enhancement.getIn(['price', 'contacts'])}</div>}
        {/*!owned &&
          <div
            onMouseLeave= {(e) => {if (!owned) this.unfocusParentEnhancement(e); }}
          >{'\u{1f575}'}{enhancement.getIn(['price', 'contacts'])}</div>*/}
        {!owned && <button
          className='enhancement-buy-button'
          onClick={dashboardActions.buyEnhancement}>
          Buy
        </button>}
      </div>
    );
  }
}

EnhancementCard.propTypes = {
  enhancement: React.PropTypes.instanceOf(immutable.Map),
  owned: React.PropTypes.bool
};

export default EnhancementCard;
