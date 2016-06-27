import uuid from '../../../../client/lib/guid';
import EquipmentList from '../equipments.list';

const Sanya = {
  ETA: 0,
  KIA: false,
  electronicsSkill: 1,
  equipmentSlots: 2,
  equipments: [
    EquipmentList[6],
    EquipmentList[0]
  ],
  experience: 100,
  id: uuid() + 'operative',
  imgsrc: '../../assets/img/agents/operative/sanya_128.jpg',
  loyalty: 'loyal',
  missionsDone: [],
  name: 'Sanya',
  operationsSkill: 4,
  originCountry: 'Indonesia',
  prison: false,
  rank: '3',
  specialist: 'operative',
  stealthSkill: 3,
  personality: 'SP'
};

export default Sanya;
