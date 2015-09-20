var playa =
  `{
"title": "Apprentice",
"gameCash": 2000,
"gameContacts": 300,
"equipments": [],
"countries": [{
  "reputation": 100,
  "obscurity": 1,
  "name": "US"
}, {
  "reputation": 100,
  "obscurity": 1,
  "name": "West Europe"
}],
"agents": [{
  "MissionsDone": [],
  "loyalty": "normal",
  "ETAtime": null,
  "ETA": false,
  "equipmentSlots": 3,
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
"missions": [{
  "agentLimit": 2,
  "losses": {
    "reputation": 100
  },
  "rewards": {
    "gameCash": 500,
    "gameContacts": 10
  },
  "inCountry": "",
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
  "title": "Blackmailed"
}]
}`;


var playerdefaults = JSON.parse(playa);

export default playerdefaults;
