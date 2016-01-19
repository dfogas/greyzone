var playerdefaults = {
  name: '',
  title: "Novice",
  gameCash: 1000,
  gameContacts: 100,
  activemission: {
    title: 'Set-up operation',
    tasks: [
      [{
        name: 'close_combat',
        type: 'operations',
        imgsrc: 'close_combat.jpg'
      }, {
        name: 'hide',
        type: 'stealth',
        imgsrc: 'hide.jpg'
      }],
      [{
        name: 'hit',
        type: 'operations',
        imgsrc: 'hit.jpg'
      }, {
        name: 'improv',
        type: 'operations',
        imgsrc: 'improv.jpg'
      }],
      [{
        name: 'infiltrate',
        type: 'stealth',
        imgsrc: 'infiltrate.jpg'
      }, {
        name: 'improv',
        type: 'stealth',
        imgsrc: 'improv.jpg'
      }, {
        name: 'hide',
        type: 'stealth',
        imgsrc: 'hide.jpg'
      }]
    ],
    rewards: {
      gameCash: 600,
      reputation: 100
    },
    losses: {
      agentImprisoned: true,
      reputation: 100,
      gameCash: 200
    },
    agentLimit: 3,
    tier: 1,
    equipmenteffects: {
      actionchoose: null,
      damageprotocol: false,
      lockeddice: null
    },
    taskscompleted: [],
    inCountry: 'West Europe',
    started: false,
    agentsonmission: [],
    mission: {
      currenttask: {
        agentontask: null,
        diceslock: false,
        dicesthrown: [],
        remainingdices: [],
        taskno: null
      }
    }
  },
  agentinarmory: null,
  componentsstates: {
    agentscrollbar: {
      componentstyle: {left: 0}
    }
  },
  equipments: [{
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
  }],
  countrystats: [{
      reputation: 100,
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
    }],
  agents: [{
    MissionsDone: [],
    loyalty: 'normal',
    ETA: false,
    equipmentSlots: 3,
    equipments: [{name: ''}, {name: ''}, {name: ''}],
    stealthSkill: 3,
    electronicsSkill: 5,
    operationsSkill: 3,
    originCountry: 'UK',
    experience: 280,
    rank: 6,
    imgsrc: '../../assets/img/agents/technician/tech1_128.jpg',
    specialist: 'technician',
    name: 'Jeremy',
    prison: false,
    KIA: false
  }],
  missions: [{
    title: 'Set-up operation',
    tasks: [
      [{
        name: 'close_combat',
        type: 'operations',
        imgsrc: 'close_combat.jpg'
      }, {
        name: 'hide',
        type: 'stealth',
        imgsrc: 'hide.jpg'
      }],
      [{
        name: 'hit',
        type: 'operations',
        imgsrc: 'hit.jpg'
      }, {
        name: 'improv',
        type: 'operations',
        imgsrc: 'improv.jpg'
      }],
      [{
        name: 'infiltrate',
        type: 'stealth',
        imgsrc: 'infiltrate.jpg'
      }, {
        name: 'improv',
        type: 'stealth',
        imgsrc: 'improv.jpg'
      }, {
        name: 'hide',
        type: 'stealth',
        imgsrc: 'hide.jpg'
      }]
    ],
    inCountry: 'West Europe',
    rewards: {
      gameCash: 600,
      reputation: 100
    },
    losses: {
      agentImprisoned: true,
      reputation: 100,
      gameCash: 200
    },
    agentLimit: 3,
    tier: 1
  },{
    title: 'Reverse Engineering',
    tasks: [
      [{
        name: 'decipher',
        type: 'electronics',
        imgsrc: 'decipher.jpg'
      }, {
        name: 'decipher',
        type: 'electronics',
        imgsrc: 'decipher.jpg'
      }, {
        name: 'improv',
        type: 'operations',
        imgsrc: 'improv.jpg'
      }],
      [{
        name: 'tap',
        type: 'electronics',
        imgsrc: 'tap.jpg'
      }, {
        name: 'improv',
        type: 'operations',
        imgsrc: 'improv.jpg'
      }]
    ],
    inCountry: 'US',
    rewards: {
      gameCash: 500
    },
    losses: {
      gameCash: 200
    },
    agentLimit: 2,
    tier: 1
  }],
  statuses: [],
  enhancements: [{
    name: 'Operation I.',
    type: 'capability',
    price: {
      cash: 0,
      contacts: 0
    },
    prerequisites: {}
  }, {
    name: 'Basic Training',
    type: 'leadership',
    price: {
      cash: 0,
      contacts: 0
    },
    prerequisites: {}
  }, {
    name: 'Locals',
    type: 'toys',
    price: {
      cash: 0,
      contacts: 0
    },
    prerequisites: {}
  }, {
    name: 'Workshop',
    type: 'toys',
    price: {
      cash: 0,
      contacts: 0
    },
    prerequisites: {}
  }, {
    name: 'Forger',
    type: 'toys',
    price: {
      cash: 0,
      contacts: 0
    },
    prerequisites: {}
  }],
  missionsDone: [],
  achievements: [
    {
      name: 'Tutorial'
    },
    {
      name: 'Achievement no. 1'
    }
  ],
  timestarted: 0
};

export default playerdefaults;
