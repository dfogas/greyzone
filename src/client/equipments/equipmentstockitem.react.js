import * as equipmentActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import $ from 'jquery';

class EquipmentStockItem extends Component {
  buy(ev) {
    ev.preventDefault();
    const testRE = new RegExp('available');
    if (testRE.test(ev.target.className))
      equipmentActions.buy(ev.target.title);
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.title);
  }

  sell(ev) {
    ev.preventDefault();
    equipmentActions.sell(ev.target.title);
  }

  render() {
    const {available, equipment} = this.props;

    return (
      <div
        className={'equipment-stock-item' + (available ? ' available' : '')}
        description={equipment.get('description')}
        draggable='true'
        name={equipment.get('name')}
        onClick={this.buy.bind(this)}
        onContextMenu={(e) => this.sell(e)}
        onDragStart={this.drag}
        tag={equipment.get('tag')}
        title={equipment.get('name')}
      />
    );
  }
}

EquipmentStockItem.propTypes = {
  available: React.PropTypes.bool,
  equipment: React.PropTypes.instanceOf(immutable.Map),
  name: React.PropTypes.string
};

export default EquipmentStockItem;
