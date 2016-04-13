const chai = require('chai');
const expect = require('chai').expect;
// import chai, {expect} from 'chai';
const chaiImmutable = require('chai-immutable');
// import chaiImmutable from 'chai-immutable';
const immutable = require('immutable');
// import immutable from 'immutable';

chai.use(chaiImmutable);

const allAgents = require('../../../client/lib/allagents');
// import allAgents from '../../../client/lib/allagents';

const jsonapi = immutable.fromJS({
  agentbeingsaved: {
    'imgsrc' : '../../assets/img/agents/spy/spy3_128.png',
    'KIA' : false,
    'equipments' : [
      {
        'name' : ''
      },
      {
        'name' : ''
      }
    ],
    'operationsSkill' : 1,
    'loyalty' : 'normal',
    'equipmentSlots' : 2,
    'experience' : 145,
    'missionsDone': [],
    'prison' : false,
    'name' : 'Paka',
    'rank' : '3',
    'stealthSkill' : 4,
    'originCountry' : 'France',
    'specialist' : 'spy',
    'ETA' : 0,
    'electronicsSkill' : 3
  },
  agents: [
    {
      'imgsrc' : '../../assets/img/agents/operative/operative4_128.png',
      'KIA' : false,
      'equipments' : [
        {
          'name' : ''
        }, {
          'name' : ''
        }
      ],
      'operationsSkill' : 5,
      'loyalty' : 'normal',
      'equipmentSlots' : 2,
      'missionsDone' : [],
      'experience' : 265,
      'prison' : false,
      'name' : 'Mat',
      'rank' : 4,
      'stealthSkill' : 1,
      'originCountry' : 'Iran',
      'specialist' : 'operative',
      'ETA' : 1460376593652,
      'electronicsSkill' : 3
    }, {
      'imgsrc' : '../../assets/img/agents/technician/technician3_128.png',
      'KIA' : false,
      'equipments' : [
        {
          'name' : ''
        }, {
          'name' : ''
        }
      ],
      'operationsSkill' : 4,
      'loyalty' : 'normal',
      'equipmentSlots' : 2,
      'missionsDone' : [],
      'experience' : 500,
      'prison' : false,
      'name' : 'Minina',
      'rank' : '5',
      'stealthSkill' : 2,
      'originCountry' : 'Australia',
      'specialist' : 'technician',
      'ETA' : 1460310362247,
      'electronicsSkill' : 4
    }, {
      'imgsrc' : '../../assets/img/agents/spy/spy4_128.png',
      'KIA' : false,
      'equipments' : [
        {
          'name' : ''
        }, {
          'name' : ''
        }
      ],
      'operationsSkill' : 3,
      'loyalty' : 'normal',
      'equipmentSlots' : 2,
      'missionsDone' : [],
      'experience' : 725,
      'prison' : false,
      'name' : 'Jenat',
      'rank' : 6,
      'stealthSkill' : 6,
      'originCountry' : 'Spain',
      'specialist' : 'spy',
      'ETA' : 1460384617339,
      'electronicsSkill' : 2
    }
  ],
  agentinarmory: {
    'imgsrc' : '../../assets/img/agents/spy/spy1_128.png',
      'KIA' : false,
      'equipments' : [{
        'name' : 'Heavy Arms'
      }, {
        'name' : ''
      }],
      'operationsSkill' : 4,
      'loyalty' : 'normal',
      'equipmentSlots' : 2,
      'missionsDone' : [],
      'experience' : 790,
      'prison' : false,
      'name' : 'Jatyar',
      'rank' : 6,
      'stealthSkill' : 5,
      'originCountry' : 'France',
      'specialist' : 'spy',
      'ETA' : 1460384051651,
      'electronicsSkill' : 2
    },
    activemission: {
      agentsonmission: [
        {
          'imgsrc' : '../../assets/img/agents/technician/technician4_128.png',
          'KIA' : false,
          'equipments' : [
            {
              'name' : ''
            }, {
              'name' : ''
            }
          ],
          'operationsSkill' : 2,
          'loyalty' : 'normal',
          'equipmentSlots' : 2,
          'missionsDone' : [],
          'experience' : 680,
          'prison' : false,
          'name' : 'Taten',
          'rank' : 6,
          'stealthSkill' : 3,
          'originCountry' : 'Indonesia',
          'specialist' : 'technician',
          'ETA' : 1460319995460,
          'electronicsSkill' : 6
        }, {
          'imgsrc' : '../../assets/img/agents/technician/technician2_128.png',
          'KIA' : false,
          'equipments' : [
            {
              'name' : ''
            }, {
              'name' : 'Custom Tools'
            }
          ],
          'operationsSkill' : 2,
          'loyalty' : 'normal',
          'equipmentSlots' : 2,
          'missionsDone' : [],
          'experience' : 490,
          'prison' : false,
          'name' : 'Pahar',
          'rank' : 5,
          'stealthSkill' : 2,
          'originCountry' : 'England',
          'specialist' : 'technician',
          'ETA' : 1460375984450,
          'electronicsSkill' : 6
        }
      ],
      mission: {
        currenttask: {
          agentontask: {
            'imgsrc' : '../../assets/img/agents/technician/technician1_128.png',
            'KIA' : false,
            'equipments' : [{
              'name' : ''
            }, {
              'name' : 'Custom Tools'
            }
          ],
          'operationsSkill' : 1,
          'loyalty' : 'normal',
          'equipmentSlots' : 2,
          'missionsDone' : [],
          'experience' : 635,
          'prison' : false,
          'name' : 'Priay',
          'rank' : 6,
          'stealthSkill' : 3,
          'originCountry' : 'Thailand',
          'specialist' : 'technician',
          'ETA' : 1460325107717,
          'electronicsSkill' : 7
          }
        }
      }
    }
});

describe('All Agents', () => {
  it('should consider all possible items', () =>
    expect(allAgents(jsonapi).size).to.equal(8));
});
