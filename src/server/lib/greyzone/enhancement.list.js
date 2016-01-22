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
    name: 'Operation I.',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'capability'
  }, {
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
    name: 'Basic Training',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'leadership'
  }, {
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
    name: 'Locals',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'toys'
  }, {
    name: 'Workshop',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'toys'
  }, {
    name: 'Forger',
    prerequisites: [],
    price: {
      cash: 0,
      contacts: 0
    },
    type: 'toys'
  }, {
    name: 'Arms Dealer',
    prerequisites: [],
    price: {
      cash: 2500,
      contacts: 20
    },
    type: 'toys'
  }, {
    name: 'Laboratory',
    prerequisites: [],
    price: {
      cash: 2500,
      contacts: 20
    },
    type: 'toys'
  }, {
    name: 'Pharmacy',
    prerequisites: [],
    price: {
      cash: 2500,
      contacts: 20
    },
    type: 'toys'
  }, {
    name: 'Stork Ind.',
    prerequisites:[],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
    name: 'Army Level Crypto',
    prerequisites: [],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
    name: 'Cleaning Service',
    prerequisites: [],
    price: {
      cash: 10000,
      contacts: 10
    },
    type: 'toys'
  }, {
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
