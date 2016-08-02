import uuid from '../../../../client/lib/guid';
import EquipmentList from '../equipments/equipments.list';

const Miyako = {
  ETA: 0,
  KIA: false,
  electronicsSkill: 5,
  equipmentSlots: 2,
  equipments: [
    EquipmentList[3],
    EquipmentList[4]
  ],
  experience: 100,
  id: uuid() + 'technician',
  imgsrc: '../../assets/img/agents/technician/miyako_128.jpg',
  loyalty: 'loyal',
  missionsDone: [],
  name: 'Miyako',
  operationsSkill: 2,
  originCountry: 'Japan',
  prison: false,
  rank: '3',
  specialist: 'technician',
  stealthSkill: 1,
  personality: 'SJ'
};

export default Miyako;
