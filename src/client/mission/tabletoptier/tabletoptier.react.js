// Dumb Component
import './tabletoptier.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import DiceBin from './dicebin/dicebin.react';
import TableTop from './tabletop/tabletop.react';
import TableTopMessage from './tabletop/tabletop.message.react';

class TableTopTier extends Component {
  render() {
    const {activemission, tutorial} = this.props;

    return (
      <div id='TableTopTier'>
        <span id='MissionInCountry'>in {activemission.get('inCountry')}</span>
        <TableTop
          activemission={activemission}
          tutorial={tutorial}
          />
        <TableTopMessage missionlog={activemission.get('log')}/>
        <DiceBin activemission={activemission} />
      </div>
    );
  }
}

TableTopTier.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default TableTopTier;
