import {render} from '../utils/utils';
import {expect} from 'chai';
import React from 'react';
import AgentEquipmentPicturePlaceholder from '../../../agents/agentcard/agent.equipment.picture.placeholder.react';

import HandyKit from '../data/equipments/handy.kit.test';

describe('Agent Equipment Picture Placeholder Component', () => {// eslint-disable-line no-undef
  it('renders correctly', () => {// eslint-disable-line no-undef
    const component = render(
      <AgentEquipmentPicturePlaceholder
        agentequipment={HandyKit}
        id='id'
        isMission={true}
        isShowcased={true}
        name='Handy Kit'
        onSave={() => {}}
        onState={() => {}}
        text='a'
        />
    );
    expect(component.type).to.equal('div');
    expect(component.props.className).to.have.string('HandyKit');
    expect(component.props.className).to.have.string('agent-equipment-picture-placeholder');
    expect(component.props.className).to.have.string(' showcased');
    expect(component.props.className).to.have.string(' mission');
  });
});
