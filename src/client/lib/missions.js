var missions = {
  list: [{
  'title': 'Cash Transport',
  'tasks': [
    [{
      'name': 'monitor',
      'type': 'electronics',
      'imgsrc': 'monitor.jpg'
    }, {
      'name': 'monitor',
      'type': 'electronics',
      'imgsrc': 'monitor.jpg'
    }],
    [{
      'name': 'pursuit',
      'type': 'operations',
      'imgsrc': 'pursuit.jpg'
    }, {
      'name': 'pursuit',
      'type': 'operations',
      'imgsrc': 'pursuit.jpg'
    }, {
      'name': 'hit',
      'type': 'operations',
      'imgsrc': 'hit.jpg'
    }],
    [{
      'name': 'hit',
      'type': 'operations',
      'imgsrc': 'hit.jpg'
    }, {
      'name': 'close_combat',
      'type': 'operations',
      'imgsrc': 'close_combat.jpg'
    }]
    ],
    'inCountry': '',
    'rewards': {
      'reputation': 100,
      'obscurity': -0.1,
      'gameCash': 500
    },
    'losses': {
      'gameContacts': 5,
      'reputation': 100
    },
    'agentLimit': 3,
    'special': false
  }, {
    'title': 'A friend in inner circle',
    'tasks': [
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }],
      [{
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }],
      [{
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameContacts': 10,
      'gameCash': 500
    },
    'losses': {
      'gameCash': -500,
      'reputation': -100
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Blackmailed',
    'tasks': [
      [{
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }],
      [{
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameContacts': 10,
      'gameCash': 500
    },
    'losses': {
      'reputation': 100
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Bank Robbery',
    'tasks': [
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }, {
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }],
      [{
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 1500,
      'reputation': 100
    },
    'losses': {
      'obscurity': 0.1,
      'agentImprisoned': true
    },
    'agentLimit': 3,
    'special': true
  }, {
    'title': 'Assasination',
    'tasks': [
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'reputation': 300,
      'gameCash': 1000,
      'gameContacts': 10
    },
    'losses': {
      'agentKilled': true,
      'gameContacts': 8
    },
    'agentLimit': 1,
    'special': true
  }, {
    'title': 'Deliver the message',
    'tasks': [
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }],
      [{
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }],
      [{
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'reputation': 100,
      'gameCash': 200
    },
    'losses': {
      'agentImprisoned': true,
      'gameContacts': 3
    },
    'agentLimit': 4,
    'special': true
  }, {
    'title': 'Private Collection',
    'tasks': [
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }],
      [{
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }],
      [{
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }],
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }, {
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 1500
    },
    'losses': {
      'agentImprisoned': true,
      'gameContacts': 3
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Reverse Engineering',
    'tasks': [
      [{
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 500
    },
    'losses': {
      'gameCash': 200
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Target Extraction',
    'tasks': [
      [{
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'reputation': 100,
      'gameContacts': 3
    },
    'losses': {
      'reputation': 100,
      'gameContacts': 3
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Industrial Espionage',
    'tasks': [
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }],
      [{
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 1000,
      'gameContacts': 5
    },
    'losses': {
      'reputation': 200,
      'gameContacts': 5
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Captured!',
    'tasks': [
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }],
      [{
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'agentFreed': true,
      'reputation': 150
    },
    'losses': {
      'agentImprisoned': true,
      'reputation': 25
    },
    'agentLimit': 1,
    'special': true
  }, {
    'title': 'Interrogation',
    'tasks': [
      [{
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }],
      [{
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameContacts': 5
    },
    'losses': {
      'gameContacts': 5
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Agent in trouble',
    'tasks': [
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'reputation': 50,
      'gameContacts': -3,
      'agentRecruited': true
    },
    'losses': {
      'reputation': 100
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Desinformation',
    'tasks': [
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameContacts': 8,
      'obscurity': 0.1
    },
    'losses': {
      'agentImprisoned': true,
      'gameContacts': 3
    },
    'agentLimit': 1,
    'special': false
  }, {
    'title': 'Set-up operation',
    'tasks': [
      [{
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }],
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 600,
      'reputation': 100
    },
    'losses': {
      'agentImprisoned': true,
      'reputation': 100,
      'gameCash': 200
    },
    'agentLimit': 4,
    'special': true
  }, {
    'title': 'Silence the witness',
    'tasks': [
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 150,
      'reputation': 50
    },
    'losses': {
      'reputation': 50
    },
    'agentLimit': 1,
    'special': false
  }, {
    'title': 'Secret investigation',
    'tasks': [
      [{
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }],
      [{
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }],
      [{
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 100,
      'gameContacts': 5,
      'reputation': 200
    },
    'losses': {
      'gameCash': 100,
      'gameContacts': 3,
      'reputation': 100
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Money channelling',
    'tasks': [
      [{
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }],
      [{
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }],
      [{
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 400
    },
    'losses': {
      'obscurity': 0.1,
      'reputation': 100
    },
    'agentLimit': 3,
    'special': false
  }, {
    'title': 'An old debt',
    'tasks': [
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'agentLoyal': true,
      'gameContacts': 3
    },
    'losses': {
      'agentKilled': true,
      'reputation': 60
    },
    'agentLimit': 1,
    'special': true
  }, {
    'title': 'Site recon',
    'tasks': [
      [{
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }],
      [{
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }],
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameContacts': 5,
      'reputation': 50
    },
    'losses': {
      'gameCash': 50,
      'gameContacts': 3
    },
    'agentLimit': 3,
    'special': false
  }, {
    'title': 'Package delivery',
    'tasks': [
      [{
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }],
      [{
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 250,
      'reputation': 100
    },
    'losses': {
      'agentImprisoned': true,
      'reputation': 80
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Demonstration of power',
    'tasks': [
      [{
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }],
      [{
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'reputation': 200
    },
    'losses': {
      'reputation': 100
    },
    'agentLimit': 1,
    'special': false
  }, {
    'title': 'Prison Break',
    'tasks': [
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }],
      [{
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'agentLoyal': true,
      'gameCash': 100
    },
    'losses': {
      'gameCash': 200,
      'obscurity': 0.1
    },
    'agentLimit': 4,
    'special': true
  }, {
    'title': 'Network infiltration',
    'tasks': [
      [{
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameContacts': 5
    },
    'losses': {
      'agentImprisoned': true
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Catch Serial Killer',
    'tasks': [
      [{
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameContacts': 7,
      'obscurity': 0.1
    },
    'losses': {
      'gameCash': 50,
      'gameContacts': 3,
      'obscurity': 0.1
    },
    'agentLimit': 3,
    'special': false
  }, {
    'title': 'Escape Mission',
    'tasks': [
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }],
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }],
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'reputation': 30
    },
    'losses': {
      'agentImprisoned': true,
      'reputation': 30
    },
    'agentLimit': 1,
    'special': true
  }, {
    'title': 'Destroy Evidence',
    'tasks': [
      [{
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'monitor',
        'type': 'electronics',
        'imgsrc': 'monitor.jpg'
      }, {
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameContacts': 3,
      'obscurity': 0.2
    },
    'losses': {
      'agentImprisoned': true,
      'reputation': 50
    },
    'agentLimit': 2,
    'special': false
  }, {
    'title': 'Bounty Hunt',
    'tasks': [
      [{
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'hide',
        'type': 'stealth',
        'imgsrc': 'hide.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'pursuit',
        'type': 'operations',
        'imgsrc': 'pursuit.jpg'
      }, {
        'name': 'hit',
        'type': 'operations',
        'imgsrc': 'hit.jpg'
      }, {
        'name': 'close_combat',
        'type': 'operations',
        'imgsrc': 'close_combat.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 200,
      'obscurity': 0.1,
      'reputation': 60
    },
    'losses': {
      'agentKilled': true,
      'reputation': 60
    },
    'agentLimit': 3,
    'special': true
  }, {
    'title': 'Next on the Blacklist',
    'tasks': [
      [{
        'name': 'puppet',
        'type': 'stealth',
        'imgsrc': 'puppet.jpg'
      }, {
        'name': 'infiltrate',
        'type': 'stealth',
        'imgsrc': 'infiltrate.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }],
      [{
        'name': 'tap',
        'type': 'electronics',
        'imgsrc': 'tap.jpg'
      }, {
        'name': 'decipher',
        'type': 'electronics',
        'imgsrc': 'decipher.jpg'
      }, {
        'name': 'improv',
        'type': 'operations',
        'imgsrc': 'improv.jpg'
      }]
    ],
    'inCountry': '',
    'rewards': {
      'gameCash': 100,
      'reputation': 200
    },
    'losses': {
      'gameCash': 250,
      'reputation': 100
    },
    'agentLimit': 2,
    'special': false
  }]
};

export default missions;
