const chai = require('chai');
const expect = require('chai').expect;
// import chai, {expect} from 'chai';
const chaiImmutable = require('chai-immutable');
// import chaiImmutable from 'chai-immutable';
const immutable = require('immutable');
// import immutable from 'immutable';
const trainingtable = require('../../../server/lib/greyzone/trainingtable');

chai.use(chaiImmutable);

const agentRankup = require('../../../client/lib/agentrankup');

const agentOne = immutable.fromJS({
  'imgsrc' : '../../assets/img/agents/spy/spy3_128.jpg',
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
});

describe('Agent Rankup', () => {

  it('should give agent appropriate upgrade', () => {
    expect(agentRankup(trainingtable, 7, agentOne).equipment).to.be.undefined;
    expect(agentRankup(trainingtable, 7, agentOne).skill).to.be.a('string');
  });

});
