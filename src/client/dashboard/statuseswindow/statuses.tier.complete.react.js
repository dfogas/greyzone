import * as statusesActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';
// import {FormattedHTMLMessage} from 'react-intl';

class StatusesTierComplete extends Component {
  render() {
    const {tierdisplayed} = this.props;
    return (
      <div id='StatusesTierComplete'>
        {msg('dashboard.statuses.tier' + tierdisplayed)}
        <button onClick={(e) => statusesActions.tierCompleteClose()}>Close</button>
      </div>
    );
  }
}

StatusesTierComplete.propTypes = {
  tierdisplayed: React.PropTypes.number
};

export default StatusesTierComplete;
