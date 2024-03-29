/*
  Datová struktura
  {
    name: '',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: ''
  }
*/

const EnhancementList = [
  {
    description: 'Accept Tier 1 Missions',
    level: 1,
    name: 'Operation I.',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'capability'
  }, {
    description: 'Accept Tier 2 Missions',
    level: 2,
    name: 'Operation II.',
    prerequisites: [{
      name: 'Operation I.',
      type: 'enhancement'
    }],
    price: {
      cash: 1000,
      contacts: 10
    },
    type: 'capability'
  }, {
    description: 'Accept Tier 3 Missions',
    level: 3,
    name: 'Good Label',
    prerequisites: [{
      name: 'Operation II.',
      type: 'enhancement'
    }],
    price: {
      cash: 50000,
      contacts: 500
    },
    type: 'capability'
  }, {
    description: 'Accept Tier 4 and campaign missions',
    level: 4,
    name: 'Higher Level',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 500000,
      contacts: 1000
    },
    type: 'capability'
  }, {
    description: 'Accept Tier 5 Missions',
    level: 5,
    name: 'Top Class',
    prerequisites: [{
      name: 'Higher Level',
      type: 'enhancement'
    }],
    price: {
      cash: 2000000,
      contacts: 4000
    },
    type: 'capability'
  }, {
    description: 'Hire and Train Agents up to Rank 3',
    level: 1,
    name: 'Basic Training',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'leadership'
  }, {
    description: 'Hire and Train Agents up to Rank 6',
    level: 2,
    name: 'Crash Course',
    prerequisites: [{
      name: 'Basic Training',
      type: 'enhancement'
    }],
    price: {
      cash: 500,
      contacts: 25
    },
    type: 'leadership'
  }, {
    description: 'Hire and Train Agents Up to Rank 8',
    level: 3,
    name: 'Training Grounds',
    prerequisites: [{
      name: 'Crash Course',
      type: 'enhancement'
    }],
    price: {
      cash: 2500,
      contacts: 25
    },
    type: 'leadership'
  }, {
    description: 'Hire and Train Agents Up to Rank 10. Some special agents may offer you their services.',
    level: 4,
    name: 'Focus Training I.',
    prerequisites: [{
      name: 'Training Grounds',
      type: 'enhancement'
    }],
    price: {
      cash: 12500,
      contacts: 50
    },
    type: 'leadership'
  }, {
    description: 'Hire and Train Agents Up to Rank 12. Special Missions required for such promotion.',
    level: 5,
    name: 'Focus Training II.',
    prerequisites: [{
      name: 'Focus Training I.',
      type: 'enhancement'
    }],
    price: {
      cash: 50000,
      contacts: 150
    },
    type: 'leadership'
  }, {
    description: 'Hired Gun equipment can be purchased.',
    name: 'Locals',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'toys'
  }, {
    description: 'Handy Kit equipment can be purchased',
    name: 'Workshop',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'toys'
  }, {
    description: 'Fake passports equipment can be purchased',
    name: 'Forger',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'toys'
  }, {
    description: 'Heavy Arms equipment can be purchased',
    name: 'Arms Dealer',
    prerequisites: [],
    price: {
      cash: 2500,
      contacts: 20
    },
    type: 'toys'
  }, {
    description: 'Custom Tools equipment can be purchased',
    name: 'Laboratory',
    prerequisites: [],
    price: {
      cash: 2500,
      contacts: 20
    },
    type: 'toys'
  }, {
    description: 'Drugs Control equipment can be purchased',
    name: 'Pharmacy',
    prerequisites: [],
    price: {
      cash: 2500,
      contacts: 20
    },
    type: 'toys'
  }, {
    description: 'Protective Gear equipment can be purchased',
    exclusive: true,
    name: 'Stork Ind.',
    prerequisites:[],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
    description: 'WPAS equipment can be purchased',
    exclusive: true,
    name: 'Army Level Crypto',
    prerequisites: [],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
    description: 'DCP equipment can be purchased',
    exclusive: true,
    name: 'Cleaning Service',
    prerequisites: [],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
  //   description: 'Mission Catch Serial Killer',
  //   name: 'Deputy of Law',
  //   prerequisites: [{
  //     name: 'Good Label',
  //     type: 'enhancement'
  //   }],
  //   price: {
  //     cash: 10000,
  //     contacts: 100
  //   },
  //   type: 'operationsscope'
  // }, {
  //   description: 'Mission Next On the Blacklist',
  //   name: 'Puppeteering FBI',
  //   prerequisites: [{
  //     name: 'Good Label',
  //     type: 'enhancement'
  //   }, {
  //     name: '',
  //     criteria: {
  //       class: 'spy',
  //       rank: 10
  //     },
  //     type: 'agent'
  //   }],
  //   price: {
  //     cash: 10000,
  //     contacts: 100
  //   },
  //   type: 'operationsscope'
  // }, {
  //   description: 'Mission Assasination',
  //   name: 'Augean Stables',
  //   prerequisites: [{
  //     name: 'Good Label',
  //     type: 'enhancement'
  //   }, {
  //     name: '',
  //     criteria: {
  //       obscurity: 2
  //     },
  //     type: 'countrystat'
  //   }],
  //   price: {
  //     cash: 10000,
  //     contacts: 100
  //   },
  //   type: 'operationsscope'
  // }, {
    description: 'Mission Bank Robbery',
    missiontag: 'bankrobbery',
    name: 'Nostalgia',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  }, {
    description: 'Mission An Old Debt',
    missiontag: 'anolddebt',
    name: 'Side Quest',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  }, {
    description: 'Mission Prison Break',
    missiontag: 'prisonbreak',
    name: 'We Got the Power',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  }, {
    description: 'Mission Silence Witness',
    missiontag: 'silencewitness',
    name: 'Repaying the favor',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  }, {
    description: 'Mission In Inner Circle',
    missiontag: 'afriendininnercircle',
    name: 'Gala in Opera house',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  // }, {
  //   description: 'Mission Private Collection',
  //   name: 'Boy with an Apple',
  //   prerequisites: [{
  //     name: 'Good Label',
  //     type: 'enhancement'
  //   }],
  //   price: {
  //     cash: 10000,
  //     contacts: 100
  //   },
  //   type: 'operationsscope'
  }, {
    description: 'Mission Destroy Evidence',
    missiontag: 'destroyevidence',
    name: 'You can\'t see me',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  // }, {
  //   description: 'Mission Industrial Espionage',
  //   name: 'WS intriques',
  //   prerequisites: [{
  //     name: 'Good Label',
  //     type: 'enhancement'
  //   }],
  //   price: {
  //     cash: 10000,
  //     contacts: 100
  //   },
  //   type: 'operationsscope'
  // }, {
  //   description: 'Mission Secret Investigation',
  //   name: 'Playing Detective',
  //   prerequisites: [{
  //     name: 'Good Label',
  //     type: 'enhancement'
  //   }],
  //   price: {
  //     cash: 10000,
  //     contacts: 100
  //   },
  //   type: 'operationsscope'
  }
];

export default EnhancementList;
