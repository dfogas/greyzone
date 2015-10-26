import {Record} from 'immutable';

const AgentRecord = Record({
  'KIA': false,
  'prison': false,
  'name': '',
  'at': '',
  'rank': 0,
  'experience': 0,
  'originCountry': '',
  'operationsSkill': 1,
  'electronicsSkill': 1,
  'stealthSkill': 1,
  'equipmentSlots': 1,
  'equipments': [{'name': ''}],
  'ETA': false,
  'ETAtime': null,
  'loyalty': 'normal',
  'MissionsDone': []
});

export default class Agent extends AgentRecord {}
