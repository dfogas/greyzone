/*
  Object that serves main component of initial state of new player --
  It is merged to some state skeleton and saved to database via player.js controller on server
*/
import CountryList from './greyzone/countries/countries.list';
import EnhancementList from './greyzone/enhancements/enhancement.list';
import EquipmentList from './greyzone/equipments/equipments.list';
import EventsList from './greyzone/events/events.list';
import Mission from './greyzone/mission.generator';
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
  armory: {
    code: 'red'
  },
  timestarted: Date.now(),
  achievements: [],
  activemission: defaultActiveMission,
  agents: [],
  campaigns: {
    campaigns: {
      dolcevita: {
        name: 'dolcevita',
        selected: true
      }
    }
  },
  countrystats: playerCountryStats(CountryList, 0, 2),
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
    countryofoperation: 'US',
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
  equipments: playerEquipments(EquipmentList, 1),
  events: EventsList,
  log: [dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' you entered office.'],
  missions: [
    Mission('Connections Map', 1, (24 * 60 * 60 * 1000)),
    Mission('Money channelling', 1, (24 * 60 * 60 * 1000))
  ],
  missionsDone: [],
  started: Date.now(),
  statuses: [],
  options: {
    animations: true,
    debug: false,
    multiplayer: false,
    soundeffects: true,
    tutorial: true
  },
  talk: {
    participants: []
  },
  tutorial: {
    firstmission: {
      done: false
    },
    playerhistory: {
      slides: [
        {
          imgsrc: 'assets/img/intro/Recruitment.jpg',
          text: `You barely remember the start of story. It was a hot summer and you were recuited by some obscure character.`
        },
        {
          imgsrc: 'assets/img/intro/TrainingThrownToWolves.jpg',
          text: `You clearly remember the start, it had been intense, you were thrown out to wolves.`
        },
        {
          imgsrc: 'assets/img/intro/RisingInRanks.jpg',
          text: `Making it through initial trials you established level of confidence that helped you rise in the rank.`
        },
        {
          imgsrc: 'assets/img/intro/LeftForDead3.jpg',
          text: `You were left for dead after one action, considered KIA but you survived and - you shouldn't.`
        },
        {
          imgsrc: 'assets/img/intro/MakingContact.jpg',
          text: `Contacting your former companion, you kept yourself hiding, but time has come for risk.`
        },
        {
          imgsrc: 'assets/img/intro/ListeningToChannels.jpg',
          text: `Monitoring the communication channels, it has come to your attention that there is a hunt on certain criminal going on.`
        },
        {
          imgsrc: '',
          text: `You decided to help her ...`
        }
      ]
    }
  }
};

export default playerdefaults;
