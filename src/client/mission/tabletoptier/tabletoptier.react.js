import './tabletoptier.css';
import Component from '../../components/component.react';
import React from 'react';
import TableTop from './tabletop/tabletop.react';
import DiceBin from './dicebin/dicebin.react';
import immutable from 'immutable';

class TableTopTier extends Component {
  render() {
    const {activemission} = this.props;

    return (
      <div id='TableTopTier'>
        <TableTop activemission={activemission} />
        <DiceBin />
      </div>
    );
  }
}

TableTopTier.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default TableTopTier;
