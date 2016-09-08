import './tabletoptier.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import DiceBin from './dicebin/dicebin.react';
import TableTop from './tabletop/tabletop.react';

class TableTopTier extends Component {

  render() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const isPlaceholder = activemission.getIn(['title']) === 'Quiet before the Storm';

    return (
      <div id='TableTopTier'>
        {!isPlaceholder &&
          <TableTop
            jsonapi={jsonapi}
          />}
        {isPlaceholder &&
          <div id='NoActiveMissionText'>No Active Mission</div>}
        <DiceBin activemission={activemission} />
      </div>
    );
  }
}

TableTopTier.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default TableTopTier;
