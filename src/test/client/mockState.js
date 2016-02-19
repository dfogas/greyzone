// import * as state from 'client/state';
var state = {
  '_id': {
    '$oid': '55a6268f4647ce0afb8550c3'
  },
  'activemission': {
    'agentLimit': 1,
    'agentsonmission': [],
    'equipmenteffects': {
      'actionchoose': null,
      'damageprotocol': false,
      'lockeddice': null
    },
    'inCountry': '',
    'mission': {
      'currenttask': {
        'agentontask': null,
        'diceslock': false,
        'dicesthrown': [],
        'remainingdices': [],
        'taskno': null
      }
    },
    'started': false,
    'tasks': [],
    'taskscompleted': [],
    'title': 'Default Mission'
  },
  'agentforhire': null,
  'agentinarmory': null,
  'agents': [{
    'ETA': false,
    'ETAtime': null,
    'KIA': false,
    'at': 'US',
    'electronicsSkill': 4,
    'equipmentSlots': 3,
    'equipments': [{
      'name': ''
    }, {
      'name': ''
    }, {
      'name': ''
    }],
    'experience': 360,
    'loyalty': 'normal',
    'missionsDone': [],
    'name': 'Jebediah',
    'operationsSkill': 6,
    'originCountry': 'Egypt',
    'prison': false,
    'randomSkill': 0,
    'rank': 7,
    'stealthSkill': 3
  }, {
    'ETA': false,
    'ETAtime': null,
    'KIA': false,
    'at': 'France',
    'electronicsSkill': 1,
    'equipmentSlots': 3,
    'equipments': [{
      'name': ''
    }, {
      'name': ''
    }, {
      'name': ''
    }],
    'experience': 450,
    'loyalty': 'normal',
    'missionsDone': [],
    'name': 'Jin',
    'operationsSkill': 8,
    'originCountry': 'China',
    'prison': false,
    'randomSkill': 0,
    'rank': 8,
    'stealthSkill': 4
  }, {
    'ETA': false,
    'ETAtime': null,
    'KIA': false,
    'at': 'Russia',
    'electronicsSkill': 3,
    'equipmentSlots': 3,
    'equipments': [{
      'name': ''
    }, {
      'name': ''
    }, {
      'name': ''
    }],
    'experience': 550,
    'loyalty': 'normal',
    'missionsDone': [],
    'name': 'Jesenin',
    'operationsSkill': 5,
    'originCountry': 'Russia',
    'prison': false,
    'randomSkill': 0,
    'rank': 9,
    'stealthSkill': 6
  }],
  'components': [{
    'componentname': 'agent-scrollbar',
    'componentstyle': {
      'left': 0
    }
  }],
  'countries': [{
    'name': 'US',
    'obscurity': 1,
    'reputation': 100
  }, {
    'name': 'West Europe',
    'obscurity': 1,
    'reputation': 100
  }, {
    'name': 'Russia',
    'obscurity': 1,
    'reputation': 100
  }, {
    'name': 'SouthEast',
    'obscurity': 1,
    'reputation': 100
  }, {
    'name': 'China',
    'obscurity': 1,
    'reputation': 0
  }, {
    'name': 'Latin America',
    'obscurity': 1,
    'reputation': 0
  }],
  'equipments': [{
    'name': 'Hired Gun',
    'quantity': 1
  }, {
    'name': 'Heavy Arms',
    'quantity': 1
  }, {
    'name': 'Protective Gear',
    'price': 15
  }, {
    'name': 'Handy Kit',
    'quantity': 1
  }, {
    'name': 'Custom Tools',
    'quantity': 1
  }, {
    'name': 'WPAS',
    'quantity': 1
  }, {
    'name': 'Fake passports',
    'quantity': 1
  }, {
    'name': 'Drugs Control',
    'quantity': 1
  }, {
    'name': 'DCP',
    'quantity': 1
  }],
  'gameCash': 2000,
  'gameContacts': 300,
  'missions': [{
    'inCountry': 'SouthEast',
    'title': 'Private Collection'
  }, {
    'inCountry': 'US',
    'title': 'Next on the Blacklist'
  }, {
    'inCountry': 'China',
    'title': 'Set-up operation'
  }, {
    'inCountry': 'Russia',
    'title': 'Desinformation'
  }, {
    'inCountry': 'West Europe',
    'title': 'Silence the witness'
  }, {
    'inCountry': 'SouthEast',
    'title': 'Cash Transport'
  }]
};

export default state;
