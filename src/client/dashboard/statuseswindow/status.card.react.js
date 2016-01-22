import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
// import animate from '../../lib/animate';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';

class StatusCard extends Component {
  focusStatus(e) {
    e.preventDefault();
    e.target.style.opacity = 1;
  }

  unfocusParentStatus(e) {
    e.preventDefault();
    e.target.parentNode.style.opacity = 0.5;
  }

  unfocusStatus(e) {
    e.preventDefault();
    e.target.style.opacity = 0.5;
  }

  render() {
    const {status, owned} = this.props;
    return (
      <div
        className={'status-card' + (owned ? ' owned' : '')}
        onMouseLeave={(e) => {if (!owned) this.unfocusStatus(e); }}
        onMouseOver={(e) => {if (!owned) this.focusStatus(e); }}
        >
        {status &&
          <div
            onMouseLeave={(e) => {if (!owned) this.unfocusParentStatus(e); }}
            >{status.get('name')}</div>}
        {!owned &&
          <div
            onMouseLeave= {(e) => {if (!owned) this.unfocusParentStatus(e); }}
          >${formatMoney(status.getIn(['price', 'cash']), 0, '.', ',')}</div>}
        {!owned &&
          <div
            onMouseLeave= {(e) => {if (!owned) this.unfocusParentStatus(e); }}
          >{'\u03A9'}{status.getIn(['price', 'contacts'])}</div>}
        <br />
        {!owned && <button
          className='status-buy-button'
          onClick={dashboardActions.buyStatus}
          >Buy</button>}
      </div>
    );
  }
}

StatusCard.propTypes = {
  owned: React.PropTypes.bool,
  status: React.PropTypes.instanceOf(immutable.Map)
};

export default StatusCard;
