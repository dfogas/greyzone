/*
  Object that serves main component of initial state of new player
  It is merged to some state skeleton and saved to database via player.js controller on server
*/
import EnhancementList from './greyzone/enhancement.list';
import CountryList from './greyzone/country.list';
import Mission from './greyzone/mission.generator';
import equipmentsList from './greyzone/equipments.list';
import playerEquipments from './greyzone/playerequipments';
import playerCountryStats from './greyzone/playercountrystats';
import dayandtime from '../../client/lib/dayandtime';
import defaultActiveMission from '../../client/lib/defaultactivemission';

var playerdefaults = {
  name: '',
  title: 'Novice',
  gameCash: 50000,
  gameContacts: 500,
  agentinarmory: null,
  timestarted: Date.now(),
  achievements: [],
  activemission: defaultActiveMission,
  agents: [],
  countrystats: playerCountryStats(CountryList, 0, 1),
  components: {
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
  equipments: playerEquipments(equipmentsList, 1),
  log: [dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' you entered office.'],
  missions: [
    Mission('Connections Map', 1, (24 * 60 * 60 * 1000)),
    Mission('Money channelling', 1, (24 * 60 * 60 * 1000))
  ],
  missionsDone: [],
  statuses: [],
  options: {
    multiplayer: false,
    tipsenable: true,
    tutorial: true
  }
};

export default playerdefaults;
