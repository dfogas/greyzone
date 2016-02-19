/*
  Object that serves main component of initial state of new player
  It is merged to some state skeleton and saved to database via player.js controller on server
*/
import EnhancementList from './greyzone/enhancement.list';
import Agent from './greyzone/agents.generator';
import Mission from './greyzone/mission.generator';
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
  agents: [
    Agent('technician', 6)
  ],
  components: {
    agentscrollbar: {
      briefing: {left: 0},
      mission: {left: 0}
    },
    dashboard: {
      index: 'strategical'
    }
  },
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
  equipments: [
    {
      description: 'adds 1 operation dice to throw',
      name: 'Hired Gun',
      price: 5,
      quantity: 1,
      tag: 'E1O'
    }, {
      description: 'set operations dice to any result',
      name: 'Heavy Arms',
      price: 10,
      quantity: 1,
      tag: 'E2O'
    }, {
      description: 'reroll any number of dices',
      name: 'Protective Gear',
      price: 15,
      quantity: 1,
      tag: 'E3O'
    }, {
      description: 'adds 1 electronics dice to throw',
      name: 'Handy Kit',
      price: 5,
      quantity: 1,
      tag: 'E1E'
    }, {
      description: 'set electronics dice to any result',
      name: 'Custom Tools',
      price: 10,
      quantity: 1,
      tag: 'E2E'
    }, {
      description: 'lock any result of throw before reroll',
      name: 'WPAS',
      price: 15,
      quantity: 1,
      tag: 'E3E'
    }, {
      description: 'adds 1 stealth dice to throw',
      name: 'Fake Passports',
      price: 5,
      quantity: 1,
      tag: 'E1S'
    }, {
      description: 'set stealth dice to any result',
      name: 'Drugs Control',
      price: 10,
      quantity: 1,
      tag: 'E2S'
    }, {
      description: 'quit mission immediately, incur only reputation losses',
      name: 'DCP',
      price: 15,
      quantity: 1,
      tag: 'E3S'
    }
  ],
  log: [
    dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' you entered office.',
    'You managed to set up the facilities for basic operation.',
    'You also managed to scrape enough cash and connections for start',
    'You may have not done anything noticeable yet but that is goint to change',
    'You need to hire two agents first - operative and spy specialists',
    'After you hired them, head to briefing room.'
  ],
  missions: [
    Mission('Connections Map', 1, (24 * 60 * 60 * 1000)),
    Mission('Money channeling', 1, (24 * 60 * 60 * 1000))
  ],
  missionsDone: [],
  statuses: [],
  options: {
    multiplayer: false,
    tutorial: true
  }
};

export default playerdefaults;
