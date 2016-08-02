/*
  Object that serves main component of initial state of new player
  It is merged to some state skeleton and saved to database via player.js controller on server
*/
import EnhancementList from './greyzone/enhancements/enhancement.list';
import CountryList from './greyzone/countries/countries.list';
import Mission from './greyzone/mission.generator';
import EquipmentList from './greyzone/equipments/equipments.list';
import playerEquipments from './greyzone/playerequipments';
import playerCountryStats from './greyzone/playercountrystats';
import dayandtime from '../../client/lib/dayandtime';
import defaultActiveMission from '../../server/lib/greyzone/missions/default/defaultactivemission';

var playerdefaults = {
  name: '',
  title: 'Novice',
  self: {
    name: 'Default Self',
    rank: 3,
    experience: 100,
    operationsSkill: 4,
    electronicsSkill: 2,
    stealthSkill: 2,
    personality: 'XX',
    equipments: [{name: ''}, {name: ''}],
    specialist: 'operative',
    prison: false,
    originCountry: 'UK',
    missionsDone: [],
    loyalty: 'normal',
    imgsrc: '',
    id: '9998af9asf9soperative',
    equipmentSlots: 2,
    KIA: false,
    ETA: 0
  },
  gameCash: 50000,
  gameContacts: 500,
  agentinarmory: null,
  agentbeingsaved: null,
  timestarted: Date.now(),
  achievements: [],
  activemission: defaultActiveMission,
  agents: [],
  countrystats: playerCountryStats(CountryList, 0, 1),
  components: {
    briefing: {
      missionthumbnail: {
        text: false
      }
    },
    dashboard: {
      index: 'strategical'
    }
  },
  dashboard: {
    strategical: {
      agenthire: {
        data: null,
        form: {
          fields: {
            rank: '',
            specialist: ''
          }
        }
      },
      countryofoperation: 'US',
      missionaccept: {
        data: null,
        form: {
          fields: {
            tier: '',
            focus: '',
            country: ''
          }
        }
      }
    }
  },
  enhancements: [
    EnhancementList[0], // Operation I.
    EnhancementList[5], // Basic Training
    EnhancementList[10], // Locals
    EnhancementList[11], // Workshop
    EnhancementList[12] // Forger
  ],
  equipments: playerEquipments(EquipmentList, 1),
  log: [dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' you entered office.'],
  missions: [
    Mission('Connections Map', 1, (24 * 60 * 60 * 1000)),
    Mission('Money channelling', 1, (24 * 60 * 60 * 1000))
  ],
  missionsDone: [],
  started: Date.now(),
  statuses: [],
  options: {
    multiplayer: false,
    tutorial: true
  },
  tutorial: {
    firstmission: {
      done: false
    }
  }
};

export default playerdefaults;
