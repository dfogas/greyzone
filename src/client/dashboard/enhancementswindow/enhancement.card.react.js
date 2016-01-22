import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
// import animate from '../../lib/animate';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';

class EnhancementCard extends Component {

  focusEnhancement(e) {
    e.preventDefault();
    e.target.style.opacity = 1;
  }

  unfocusEnhancement(e) {
    e.preventDefault();
    e.target.style.opacity = 0.5;
  }

  unfocusParentEnhancement(e) {
    e.preventDefault();
    e.target.parentNode.style.opacity = 0.5;
  }

  render() {
    const {enhancement, owned} = this.props;
    return (
      <div
        className={'enhancement-card' + (owned ? ' owned' : '')}
        onMouseLeave={(e) => {if (!owned) this.unfocusEnhancement(e); }}
        onMouseOver={(e) => {if (!owned) this.focusEnhancement(e); }}
        >
        <div
          onMouseLeave= {(e) => {if (!owned) this.unfocusParentEnhancement(e); }}
          >{enhancement.get('name')}</div>
        {!owned &&
          <div
            onMouseLeave= {(e) => {if (!owned) this.unfocusParentEnhancement(e); }}
          >${formatMoney(enhancement.getIn(['price', 'cash']), 0, '.', ',')}</div>}
        {!owned &&
          <div
            onMouseLeave= {(e) => {if (!owned) this.unfocusParentEnhancement(e); }}
          >{'\u03A9'}{enhancement.getIn(['price', 'contacts'])}</div>}
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
  enhancement: React.Proptypes.instanceOf(immutable.Map),
  owned: React.PropTypes.bool
};

export default EnhancementCard;
