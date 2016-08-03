import {render} from '../utils/utils';
import {expect} from 'chai';
import React from 'react';
import AgentEquipmentSlot from '../../../agents/agentcard/agent.equipment.slot.react';

import HandyKit from '../data/equipments/handy.kit.test';

describe('Agent Equipment Slot Component', () => {// eslint-disable-line no-undef
  it('renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentEquipmentSlot
        agentequipment={HandyKit}
        equipmentindex={1}
        id='id'
        isMission={false}
        isShowcased={true}
        name='Handy Kit'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(component.type).to.equal('div');
    expect(component.props.className).to.have.string('HandyKit');
    expect(component.props.className).to.have.string('agent-equipment-slot');
    expect(component.props.className).to.have.string(' showcased');
    expect(component.props.className).not.to.have.string(' mission');
  });
});
