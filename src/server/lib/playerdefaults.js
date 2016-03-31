/*
  Object that serves main component of initial state of new player
  It is merged to some state skeleton and saved to database via player.js controller on server
*/
import EnhancementList from './greyzone/enhancement.list';
import Mission from './greyzone/mission.generator';
import equipmentsList from './greyzone/equipments.list';
import playerEquipments from './greyzone/playerequipments';
import dayandtime from '../../client/lib/dayandtime';
import defaultActiveMission from '../../client/lib/defaultactivemission';

var playerdefaults = {
  name: '',
  title: 'Novice',
  gameCash: 50000,
  gameContacts: 500,
  agentinarmory: null,
  timestarted: Date.now(),
  achievements: [
    {
      active: true,
      name: 'Tutorial',
      progress: {
        firstMission: false
      }
    },
    {
      name: 'Achievement no. 1'
    }
  ],
  activemission: defaultActiveMission,
  agents: [],
  countrystats: [
    {
      reputation: 0,
      obscurity: 1,
      name: 'US'
    }, {
      reputation: 0,
      obscurity: 1,
      name: 'West Europe'
    }, {
      reputation: 0,
      obscurity: 1,
      name: 'Russia'
    }, {
      reputation: 0,
      obscurity: 1,
      name: 'Arabia'
    }, {
      reputation: 0,
      obscurity: 1,
      name: 'SouthEast'
    }, {
      reputation: 0,
      obscurity: 1,
      name: 'Latin America'
    }
  ],
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
  log: [
    dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' you entered office.'
  ],
  missions: [
    Mission('Connections Map', 1, (24 * 60 * 60 * 1000)),
    Mission('Money channelling', 1, (24 * 60 * 60 * 1000))
  ],
  missionsDone: [],
  statuses: [],
  options: {
    multiplayer: false,
    tutorial: true
  }
};

export default playerdefaults;
