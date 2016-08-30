import './enhancement.card.styl';
import * as enhancementsTalkActions from '../../talk/enhancements/actions';
import Component from '../../components/component.react.js';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import isExclusiveEnhancement from '../../lib/bml/exclusiveenhancement';

class EnhancementCard extends Component {
  enhancementBuy() {
    const {enhancement} = this.props;
    enhancementsTalkActions.buyEnhancement(enhancement);
  }

  render() {
    const {enhancement, list, owned, paying} = this.props;
    const paid = paying ? paying.toJS() : null;
    const isPaying = paid ?
      Object.keys(paid).reduce((prev, curr) => {
        return paid[curr] || prev;
      }, false) : false;
    return (
      <div
        className={'enhancement-card' + (owned ? ' owned' : '')}
        id={enhancement.get('name').replace(/\s+/g, '')}
        >
        <div>{enhancement.get('name')}</div>
        {true &&
          <div><em>{enhancement.get('description')}</em></div>}
        {owned &&
          <div><small>Owned</small></div>}
        {!owned &&
          <div>${formatMoney(enhancement.getIn(['price', 'cash']), 0, '.', ',')}{'\u{1f575}'}{enhancement.getIn(['price', 'contacts'])}</div>}
        {!owned && ((isExclusiveEnhancement(enhancement, list) && isPaying) || !isExclusiveEnhancement(enhancement, list)) && <button
          className='enhancement-buy-button'
          onClick={this.enhancementBuy.bind(this)}>
          Buy
        </button>}
      </div>
    );
  }
}

EnhancementCard.propTypes = {
  enhancement: React.PropTypes.instanceOf(immutable.Map),
  list: React.PropTypes.instanceOf(immutable.List),
  owned: React.PropTypes.bool,
  paying: React.PropTypes.instanceOf(immutable.Map)
};

export default EnhancementCard;
