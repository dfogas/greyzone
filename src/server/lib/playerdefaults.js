var playa =
  `{
"title": "Novice",
"gameCash": 1000,
"gameContacts": 100,
"activemission": {
  "title": "Cash Transport",
  "tasks": [
      [{
        "name": "monitor",
        "type": "electronics",
        "imgsrc": "monitor.jpg"
      }, {
        "name": "monitor",
        "type": "electronics",
        "imgsrc": "monitor.jpg"
      }],
      [{
        "name": "pursuit",
        "type": "operations",
        "imgsrc": "pursuit.jpg"
      }, {
        "name": "pursuit",
        "type": "operations",
        "imgsrc": "pursuit.jpg"
      }, {
        "name": "hit",
        "type": "operations",
        "imgsrc": "hit.jpg"
      }],
      [{
        "name": "hit",
        "type": "operations",
        "imgsrc": "hit.jpg"
      }, {
        "name": "close_combat",
        "type": "operations",
        "imgsrc": "close_combat.jpg"
      }]
    ],
    "equipmenteffects": {
      "actionchoose": null,
      "damageprotocol": false,
      "lockeddice": null
    },
    "taskscompleted": [],
    "inCountry": "West Europe",
    "rewards": {
      "reputation": 100,
      "obscurity": -0.1,
      "gameCash": 500
    },
    "losses": {
      "gameContacts": 5,
      "reputation": 100
    },
    "agentLimit": 3,
    "special": false,
    "started": false,
    "agentsonmission": [],
    "mission": {
      "currenttask": {
        "agentontask": null,
        "diceslock": false,
        "dicesthrown": [],
        "remainingdices": [],
        "taskno": null
      }
    }
},
"agentsforhire": [],
"agentinarmory": null,
"componentsstates": [{
  "componentName": "agent-scrollbar",
  "componentstyle": {"left": 0}
 }],
"equipments": [{
    "description" : "adds 1 operation dice to throw",
    "name" : "Hired Gun",
    "price" : 5,
    "quantity" : 1,
    "tag" : "E1O"
  }, {
    "description" : "set operations dice to any result",
    "name" : "Heavy Arms",
    "price" : 10,
    "quantity" : 1,
    "tag" : "E2O"
  }, {
    "description" : "reroll any number of dices",
    "name" : "Protective Gear",
    "price" : 15,
    "quantity" : 1,
    "tag" : "E3O"
  }, {
    "description" : "adds 1 electronics dice to throw",
    "name" : "Handy Kit",
    "price" : 5,
    "quantity" : 1,
    "tag" : "E1E"
  }, {
    "description" : "set electronics dice to any result",
    "name" : "Custom Tools",
    "price" : 10,
    "quantity" : 1,
    "tag" : "E2E"
  }, {
    "description" : "lock any result of throw before reroll",
    "name" : "WPAS",
    "price" : 15,
    "quantity" : 1,
    "tag" : "E3E"
  }, {
    "description" : "adds 1 stealth dice to throw",
    "name" : "Fake Passports",
    "price" : 5,
    "quantity" : 1,
    "tag" : "E1S"
  }, {
    "description" : "set stealth dice to any result",
    "name" : "Drugs Control",
    "price" : 10,
    "quantity" : 1,
    "tag" : "E2S"
  }, {
    "description" : "quit mission immediately, incur only reputation losses",
    "name" : "DCP",
    "price" : 15,
    "quantity" : 1,
    "tag" : "E3S"
}],
"countrystats": [{
    "reputation": 100,
    "obscurity": 1,
    "name": "US"
  }, {
    "reputation": 100,
    "obscurity": 1,
    "name": "West Europe"
  }, {
    "reputation": 0,
    "obscurity": 1,
    "name": "Russia"
  }, {
    "reputation": 0,
    "obscurity": 1,
    "name": "Arabia"
  }, {
    "reputation": 0,
    "obscurity": 1,
    "name": "SouthEast"
  }, {
    "reputation": 100,
    "obscurity": 1,
    "name": "Latin America"
}],
"agents": [{
  "MissionsDone": [],
  "loyalty": "normal",
  "ETAtime": null,
  "ETA": false,
  "equipmentSlots": 3,
  "equipments": [{"name": ""}, {"name": ""}, {"name": ""}],
  "stealthSkill": 3,
  "electronicsSkill": 5,
  "operationsSkill": 3,
  "originCountry": "UK",
  "experience": 280,
  "rank": 6,
  "at": "China",
  "name": "Jeremy",
  "prison": false,
  "KIA": false
}],
"missions": [
  {
    "title": "Cash Transport",
    "tasks": [
      [{
        "name": "monitor",
        "type": "electronics",
        "imgsrc": "monitor.jpg"
      }, {
        "name": "monitor",
        "type": "electronics",
        "imgsrc": "monitor.jpg"
      }],
      [{
        "name": "pursuit",
        "type": "operations",
        "imgsrc": "pursuit.jpg"
      }, {
        "name": "pursuit",
        "type": "operations",
        "imgsrc": "pursuit.jpg"
      }, {
        "name": "hit",
        "type": "operations",
        "imgsrc": "hit.jpg"
      }],
      [{
        "name": "hit",
        "type": "operations",
        "imgsrc": "hit.jpg"
      }, {
        "name": "close_combat",
        "type": "operations",
        "imgsrc": "close_combat.jpg"
      }]
    ],
    "inCountry": "West Europe",
    "rewards": {
      "reputation": 100,
      "obscurity": -0.1,
      "gameCash": 500
    },
    "losses": {
      "gameContacts": 5,
      "reputation": 100
    },
    "agentLimit": 3,
    "special": false
  },
  {
  "agentLimit": 2,
  "losses": {
    "reputation": 100
  },
  "rewards": {
    "gameCash": 500,
    "gameContacts": 10
  },
  "inCountry": "US",
  "tasks": [
    [{
      "imgsrc": "puppet.jpg",
      "type": "stealth",
      "name": "puppet"
    }, {
      "imgsrc": "monitor.jpg",
      "type": "electronics",
      "name": "monitor"
    }, {
      "imgsrc": "tap.jpg",
      "type": "electronics",
      "name": "tap"
    }],
    [{
      "imgsrc": "pursuit.jpg",
      "type": "operations",
      "name": "pursuit"
    }, {
      "imgsrc": "hide.jpg",
      "type": "stealth",
      "name": "hide"
    }, {
      "imgsrc": "improv.jpg",
      "type": "operations",
      "name": "improv"
    }],
    [{
      "imgsrc": "hit.jpg",
      "type": "operations",
      "name": "hit"
    }, {
      "imgsrc": "hit.jpg",
      "type": "operations",
      "name": "hit"
    }, {
      "imgsrc": "improv.jpg",
      "type": "operations",
      "name": "improv"
    }]
  ],
  "special": false,
  "title": "Blackmailed"
  }],
  "missionstoaccept": [],
  "organization": {
    "agentsforhire": [],
    "enhancements": [],
    "missionsDone": [],
    "missionstoaccept": []
  },
  "achievements": [
    {
      "name": "Tutorial"
    },
    {
      "name": "Achievement no. 1"
    }
  ]
}`;

var playerdefaults = JSON.parse(playa);

export default playerdefaults;
