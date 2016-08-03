/* eslint quotes: 0 */
import immutable from 'immutable';

const agent = immutable.fromJS({
  "imgsrc" : "../../assets/img/agents/spy/spy5_128.jpg",
  "KIA" : false,
  "equipments" : [{
      "tag" : "E2O",
      "name" : "Heavy Arms",
      "index" : 0
    }, {
      "tag" : "E2S",
      "name" : "Drugs Control",
      "index" : 1
    }
  ],
  "operationsSkill" : 2,
  "loyalty" : "normal",
  "equipmentSlots" : 2,
  "missionsDone" : ["5a8690738235785cgzm", "7077fb42fa6b6ffbgzm", "c2ef91fc4d6c4093gzm", "f850f12c48d65b73gzm", "8e02335d198f98d1gzm", "1f1624641ce640e8gzm", "c7b604d9c451921agzm", "428cabda6e78714cgzm", "3aaac4ff6fb5b3f8gzm", "72ae76975a1b9018gzm", "b00a8c66164040bdgzm", "83c0dcbbdc870856gzm", "96c8d64a33d710f1gzm", "0b1c647d7b299d94gzm", "99ab276214fe4ea7gzm", "56e94f33090f01a2gzm", "fd31a07af497da01gzm"],
  "experience" : 270,
  "prison" : false,
  "name" : "Jorieb",
  "rank" : 4,
  "stealthSkill" : 6,
  "personality" : "SP",
  "originCountry" : "Argentina",
  "specialist" : "spy",
  "ETA" : 0,
  "electronicsSkill" : 1,
  "id" : "5bc164bd2d8b3c55spy"
});

export default agent;
