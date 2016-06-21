/* Smart */
import './status.card.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
// import animate from '../../lib/animate';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import classnames from 'classnames';

class StatusCard extends Component {
  buyStatus() {
    const {status} = this.props;
    dashboardActions.buyStatus(status);
  }

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

    const classString = classnames(
      'status-card',
      status.get('imgsrc').substr(0, status.get('imgsrc').length - 4),
      {
        'owned': this.props.owned
      }
    );
    return (
      <div
        className={classString}
        onMouseLeave={(e) => {if (!owned) this.unfocusStatus(e); }}
        onMouseOver={(e) => {if (!owned) this.focusStatus(e); }}
        >
        {status &&
          <div
            onMouseLeave={(e) => {if (!owned) this.unfocusParentStatus(e); }}
            >{status.get('name')}</div>}
        &nbsp;-&nbsp;
        {owned &&
          <span><em>Owned</em></span>}
        {!owned &&
          <div
            onMouseLeave= {(e) => {if (!owned) this.unfocusParentStatus(e); }}
          >${formatMoney(status.getIn(['price', 'cash']), 0, '.', ',')}</div>}
        {!owned &&
          <div
            onMouseLeave= {(e) => {if (!owned) this.unfocusParentStatus(e); }}
          >{'\u{1f575}'}{status.getIn(['price', 'contacts'])}</div>}
        <br />
        {!owned && <button
          className='status-buy-button'
          onClick={this.buyStatus.bind(this)}
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
