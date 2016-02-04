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
    name: 'Operation I.',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'capability'
  }, {
    description: 'Accept Tier 2 Missions',
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
    name: 'Good Label',
    prerequisites: [{
      name: 'Operation II.',
      type: 'enhancement'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'capability'
  }, {
    description: 'Accept Tier 3 and campaign missions',
    name: 'Higher Level',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 100000,
      contacts: 1000
    },
    type: 'capability'
  }, {
    description: 'Accept Tier 5 Missions',
    name: 'Top Class',
    prerequisites: [{
      name: 'Higher Level',
      type: 'enhancement'
    }],
    price: {
      cash: 1000000,
      contacts: 10000
    },
    type: 'capability'
  }, {
    description: 'Hire and Train Agents up to Rank 3',
    name: 'Basic Training',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'leadership'
  }, {
    description: 'Hire and Train Agents up to Rank 6',
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
    name: 'Stork Ind.',
    prerequisites:[],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
    description: 'WPAS equipment can be purchased',
    name: 'Army Level Crypto',
    prerequisites: [],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
    description: 'DCP equipment can be purchased',
    name: 'Cleaning Service',
    prerequisites: [],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
    description: 'New mission - Catch Serial Killer',
    name: 'Deputy of Law',
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
    description: 'New mission - Next On the Blacklist',
    name: 'Puppeting FBI',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }, {
      name: '',
      criteria: {
        class: 'spy',
        rank: 10
      },
      type: 'agent'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  }, {
    description: 'New mission - Assasination',
    name: 'Augean Stables',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }, {
      name: '',
      criteria: {
        obscurity: 2
      },
      type: 'countrystat'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  }, {
    description: 'New mission - Bank Robbery',
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
    description: 'New Mission - An Old Debt',
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
    description: 'New Mission - Prison Break',
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
    description: 'New Mission - Protect Witness',
    name: 'Repaying the favors',
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
    description: 'New Mission - A Friend in Inner Circle',
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
  }, {
    description: 'New mission - Private Collection',
    name: 'Boy with an apple',
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
    description: 'New mission - Destroy Evidence',
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
  }, {
    description: 'New mission - Industrial Espionage',
    name: 'WS intriques',
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
    description: 'New mission - Secret Investigation',
    name: 'Playing detective',
    prerequisites: [{
      name: 'Good Label',
      type: 'enhancement'
    }],
    price: {
      cash: 10000,
      contacts: 100
    },
    type: 'operationsscope'
  }
];

export default EnhancementList;
