import generateName from './name.generator';
import generateCountry from './origin.generator';
import generateImage from './image.generator';
import generateEquipments from './equipments.generator';
import trainingtable from './trainingtable';
import getRandomSkill from '../../../client/lib/getrandomskill';

let Agent = function(character, rank) {
  let operationsSkill = 1,
      electronicsSkill = 1,
      stealthSkill = 1;

  if (character === 'operative')
    operationsSkill += 3;

  if (character === 'technician')
    electronicsSkill += 3;

  if (character === 'spy')
    stealthSkill += 3;

  for (let i = 0; i < rank; i += 1) {
    let randomSkill = getRandomSkill();
    if (randomSkill === 'operationsSkill')
      operationsSkill +=1;
    if (randomSkill === 'electronicsSkill')
      electronicsSkill +=1;
    if (randomSkill === 'stealthSkill')
      stealthSkill += 1;
  }

  return {
    name: generateName('greyzone'),
    originCountry: generateCountry(),
    imgsrc: generateImage(character),
    class: character,
    operationsSkill: operationsSkill,
    electronicsSkill: electronicsSkill,
    stealthSkill: stealthSkill,
    missionsDone: [],
    equipments: generateEquipments(trainingtable[rank - 1].slots),
    KIA: false,
    loyalty: 'normal',
    prison: false,
    experience: trainingtable[rank - 1].xp,
    rank: 1,
    equipmentSlots: trainingtable[rank - 1].slots,
    ETA: 0
  };
};

export default Agent;
