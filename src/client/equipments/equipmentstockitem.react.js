import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class EquipmentStockItem extends Component {
  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.title);
  }

  render() {
    const {available, equipment} = this.props;

    return (
      <div
        className={'equipment-stock-item' + (available ? ' available' : '')}
        description={equipment.get('description')}
        draggable='true'
        name={equipment.get('name')}
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
