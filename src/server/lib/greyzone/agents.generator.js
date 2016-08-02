/* String(AgentClass) Number(AgentRank) ImmutableList -> JS Object(Agent) */

import generateName from './name.generator';
import generateCountry from './origin.generator';
import generateImage from './image.generator';
import generateEquipments from './generateequipments';
import getRandomSkill from '../../../client/lib/bml/getrandomskill';
// import immutable from 'immutable';
import personality from './personality';
import uuid from '../../../client/lib/guid';

let Agent = function(character, rank, trainingtable) {
  let operationsSkill = 1,
      electronicsSkill = 1,
      stealthSkill = 1;

  if (character === 'operative')
    operationsSkill += 3;

  if (character === 'technician')
    electronicsSkill += 3;

  if (character === 'spy')
    stealthSkill += 3;

  for (let i = 6; i < trainingtable.get(rank - 1).get('statstotal'); i += 1) {
    let randomSkill = getRandomSkill(7, {operationsSkill, electronicsSkill, stealthSkill});
    if (randomSkill === 'operationsSkill')
      operationsSkill += 1;
    if (randomSkill === 'electronicsSkill')
      electronicsSkill += 1;
    if (randomSkill === 'stealthSkill')
      stealthSkill += 1;
  }

  return {
    id: uuid() + character,
    name: generateName('greyzone'),
    originCountry: generateCountry(),
    imgsrc: generateImage(character),
    specialist: character,
    operationsSkill: operationsSkill,
    electronicsSkill: electronicsSkill,
    stealthSkill: stealthSkill,
    missionsDone: [],
    equipments: generateEquipments(trainingtable.get(rank - 1).get('slots')),
    KIA: false,
    loyalty: 'normal',
    prison: false,
    experience: trainingtable.get(rank - 1).get('xp'),
    rank: rank,
    equipmentSlots: trainingtable.get(rank - 1).get('slots'),
    ETA: 0,
    personality: personality()
  };
};

export default Agent;
