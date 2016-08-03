/* eslint quotes: 0 */
/* extracted from browser via copy string something */
import immutable from 'immutable';

const Game = immutable.fromJS({
  "events" : [],
  "globals" : {
    "statuses" : [{
        "imgsrc" : "yacht.jpg",
        "name" : "Yacht",
        "price" : {
          "cash" : 250000,
          "contacts" : 0
        },
        "tier" : 1
      }, {
        "imgsrc" : "pacific_island.jpg",
        "name" : "Pacific Island",
        "price" : {
          "cash" : 100000,
          "contacts" : 0
        },
        "tier" : 1
      }, {
        "imgsrc" : "racing_track.jpg",
        "name" : "Racing Track",
        "price" : {
          "cash" : 550000,
          "contacts" : 0
        },
        "tier" : 2
      }, {
        "imgsrc" : "medieval_castle.jpg",
        "name" : "Medieval Castle",
        "price" : {
          "cash" : 2000000,
          "contacts" : 0
        },
        "tier" : 3
      }, {
        "imgsrc" : "peerage.jpg",
        "name" : "Peerage",
        "price" : {
          "cash" : 500000,
          "contacts" : 0
        },
        "tier" : 3
      }, {
        "imgsrc" : "art_gallery.jpg",
        "name" : "Art Gallery",
        "price" : {
          "cash" : 1000000,
          "contacts" : 0
        },
        "tier" : 3
      }, {
        "imgsrc" : "nightclub_network.jpg",
        "name" : "Nightclub Network",
        "price" : {
          "cash" : 2500000,
          "contacts" : 0
        },
        "tier" : 4
      }, {
        "imgsrc" : "winter_resort.jpg",
        "name" : "Winter Resort",
        "price" : {
          "cash" : 750000,
          "contacts" : 0
        },
        "tier" : 1
      }, {
        "imgsrc" : "five_star_hotel.jpg",
        "name" : "Five Star Hotel",
        "price" : {
          "cash" : 7500000,
          "contacts" : 0
        },
        "tier" : 4
      }, {
        "imgsrc" : "golf_course.jpg",
        "name" : "Golf Course",
        "price" : {
          "cash" : 2000000,
          "contacts" : 0
        },
        "tier" : 2
      }, {
        "imgsrc" : "hunters_range.jpg",
        "name" : "Hunter's Range",
        "price" : {
          "cash" : 1500000,
          "contacts" : 0
        },
        "tier" : 2
      }, {
        "imgsrc" : "private_jet.jpg",
        "name" : "Private Jet",
        "price" : {
          "cash" : 6000000,
          "contacts" : 0
        },
        "tier" : 4
      }
    ],
    "achievements" : [{
        "name" : "Tutorial",
        "tutorAgents" : {
          "assigningTask" : false,
          "backFromTask" : false,
          "equiping" : false,
          "hiring" : false,
          "rankingUp" : false,
          "dismissing" : false
        },
        "tutorMissions" : {
          "equiping" : false,
          "equipmentuse" : {
            "tier1" : false,
            "tier2" : false,
            "cdp" : false,
            "wpas" : false,
            "protectiveGear" : false
          },
          "diceBurned" : false,
          "failure" : false,
          "starting" : false,
          "success" : false,
          "taskCompleted" : false
        },
        "tutorDashboard" : {
          "acceptingMission" : false,
          "buyingEnhancemnts" : false,
          "discoverAchievements" : false,
          "discoverOptions" : false,
          "discoverStatuses" : false
        }
      }, {
        "name" : "City Terror",
        "initialInvestment" : {
          "cash" : 1000000,
          "contacts" : 1000
        },
        "missions" : {
          "undergroundNetwork" : false,
          "dirtyBomb" : false,
          "cityDeadlock" : false
        }
      }, {
        "name" : "Orbit Weapon",
        "initialInvestment" : {
          "cash" : 1000000,
          "contacts" : 1000
        },
        "missions" : {
          "secretConstructionSite" : false,
          "tightSpot" : false,
          "starWarsDemonstration" : false
        }
      }, {
        "name" : "Golden Cash Reserves",
        "initialInvestment" : {
          "cash" : 1000000,
          "contacts" : 1000
        },
        "missions" : {
          "stirWaters" : false,
          "planConduct" : false,
          "goldDispersion" : false
        }
      }, {
        "name" : "We Know Everything",
        "initialInvestment" : {
          "cash" : 1000000,
          "contacts" : 1000
        },
        "missions" : {
          "plantSeeds" : false,
          "buildInfrastructure" : false,
          "totalTreaty" : false
        }
      }, {
        "name" : "Immensely Rich",
        "initialInvestment" : {
          "cash" : 100000000
        },
        "missions" : {}

      }, {
        "name" : "The Greatest Con",
        "initialInvestment" : {
          "cash" : 100000,
          "contacts" : 10000
        },
        "missions" : {
          "facialReconstruction" : false,
          "purgeElectronicTrace" : false,
          "newIdentityPackage" : false
        }
      }, {
        "name" : "Collector Of Fine Arts",
        "initialInvestment" : {
          "cash" : 10000000,
          "contacts" : 10000
        },
        "missions" : {
          "privateCollection" : 0
        }
      }, {
        "name" : "Philantrope",
        "initialInvestment" : {
          "cash" : 1000000,
          "contacts" : 1000
        },
        "missions" : {
          "fightClimaChange" : false,
          "protectWildlife" : false,
          "saveThePlanet" : false
        }
      }, {
        "name" : "World is Safe Again",
        "initialInvestment" : {
          "cash" : 1000000,
          "contacts" : 1000
        },
        "missions" : {
          "pursuitMaster" : false,
          "getDominated" : false,
          "reverseSides" : false
        }
      }
    ],
    "equipments" : [{
        "description" : "adds 1 operation dice to throw",
        "heavy" : false,
        "name" : "Hired Gun",
        "price" : 500,
        "tag" : "E1O",
        "quantity" : 1
      }, {
        "description" : "set operations dice to any result",
        "heavy" : true,
        "name" : "Heavy Arms",
        "price" : 1000,
        "tag" : "E2O",
        "quantity" : 1
      }, {
        "description" : "reroll any number of dices",
        "heavy" : false,
        "name" : "Protective Gear",
        "price" : 1500,
        "tag" : "E3O",
        "quantity" : 1
      }, {
        "description" : "adds 1 electronics dice to throw",
        "heavy" : false,
        "name" : "Handy Kit",
        "price" : 500,
        "tag" : "E1E",
        "quantity" : 1
      }, {
        "description" : "set electronics dice to any result",
        "heavy" : true,
        "name" : "Custom Tools",
        "price" : 1000,
        "tag" : "E2E",
        "quantity" : 1
      }, {
        "description" : "lock any result of throw before reroll",
        "heavy" : false,
        "name" : "WPAS",
        "price" : 1500,
        "tag" : "E3E",
        "quantity" : 1
      }, {
        "description" : "adds 1 stealth dice to throw",
        "heavy" : false,
        "name" : "Fake Passports",
        "price" : 500,
        "tag" : "E1S",
        "quantity" : 1
      }, {
        "description" : "set stealth dice to any result",
        "heavy" : true,
        "name" : "Drugs Control",
        "price" : 1000,
        "tag" : "E2S",
        "quantity" : 1
      }, {
        "description" : "quit mission immediately, incur only reputation losses",
        "heavy" : true,
        "name" : "DCP",
        "price" : 1500,
        "tag" : "E3S",
        "quantity" : 1
      }
    ],
    "missions" : [{
        "imgsrc" : "ConnectionsMap.jpg",
        "tier" : 1,
        "rewards" : {
          "gameContacts" : 25
        },
        "tasks" : [[{
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }
          ], [{
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }
          ], [{
              "name" : "infiltrate",
              "type" : "stealth",
              "imgsrc" : "infiltrate.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ]],
        "sound" : "ConnectionsMap.ogg",
        "inCountry" : "West Europe",
        "losses" : {
          "gameCash" : 2500
        },
        "ETA" : 1469475667571,
        "agentLimit" : 3,
        "title" : "Connections Map",
        "tag" : "connectionsmap",
        "id" : "db1220cea8c98564gzm"
      }, {
        "imgsrc" : "ConnectionsMap.jpg",
        "tier" : 2,
        "rewards" : {
          "gameContacts" : 125
        },
        "tasks" : [[{
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }
          ], [{
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }
          ], [{
              "name" : "infiltrate",
              "type" : "stealth",
              "imgsrc" : "infiltrate.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ]],
        "sound" : "ConnectionsMap.ogg",
        "inCountry" : "",
        "losses" : {
          "gameCash" : 12500
        },
        "agentLimit" : 3,
        "title" : "Connections Map",
        "tag" : "connectionsmap"
      }, {
        "imgsrc" : "ConnectionsMap.jpg",
        "tier" : 3,
        "rewards" : {
          "gameContacts" : 625
        },
        "tasks" : [[{
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }
          ], [{
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }
          ], [{
              "name" : "infiltrate",
              "type" : "stealth",
              "imgsrc" : "infiltrate.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "ConnectionsMap.ogg",
        "inCountry" : "",
        "losses" : {
          "gameCash" : 62500
        },
        "agentLimit" : 3,
        "title" : "Connections Map",
        "tag" : "connectionsmap"
      }, {
        "imgsrc" : "DemonstrationOfPower.jpg",
        "tier" : 1,
        "rewards" : {
          "reputation" : 200
        },
        "tasks" : [[{
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }
          ], [{
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "DemonstrationOfPower.ogg",
        "inCountry" : "",
        "losses" : {
          "reputation" : 200
        },
        "agentLimit" : 2,
        "title" : "Demonstration Of Power",
        "tag" : "demonstrationofpower"
      }, {
        "imgsrc" : "DemonstrationOfPower.jpg",
        "tier" : 2,
        "rewards" : {
          "reputation" : 400
        },
        "tasks" : [[{
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }
          ], [{
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "DemonstrationOfPower.ogg",
        "inCountry" : "",
        "losses" : {
          "reputation" : 400
        },
        "agentLimit" : 2,
        "title" : "Demonstration Of Power",
        "tag" : "demonstrationofpower"
      }, {
        "imgsrc" : "DemonstrationOfPower.jpg",
        "tier" : 3,
        "rewards" : {
          "reputation" : 1000
        },
        "tasks" : [[{
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }
          ], [{
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "DemonstrationOfPower.ogg",
        "inCountry" : "",
        "losses" : {
          "reputation" : 1000
        },
        "agentLimit" : 2,
        "title" : "Demonstration Of Power",
        "tag" : "demonstrationofpower"
      }, {
        "imgsrc" : "Desinformation.jpg",
        "tier" : 1,
        "rewards" : {
          "gameContacts" : 25
        },
        "tasks" : [[{
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ]],
        "sound" : "Desinformation.ogg",
        "inCountry" : "",
        "losses" : {
          "obscurity" : 0.05
        },
        "agentLimit" : 1,
        "title" : "Desinformation",
        "tag" : "desinformation"
      }, {
        "imgsrc" : "Desinformation.jpg",
        "tier" : 2,
        "rewards" : {
          "gameContacts" : 100
        },
        "tasks" : [[{
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ]],
        "sound" : "Desinformation.ogg",
        "inCountry" : "",
        "losses" : {
          "obscurity" : 0.2
        },
        "agentLimit" : 1,
        "title" : "Desinformation",
        "tag" : "desinformation"
      }, {
        "imgsrc" : "Desinformation.jpg",
        "tier" : 3,
        "rewards" : {
          "gameContacts" : 400
        },
        "tasks" : [[{
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "Desinformation.ogg",
        "inCountry" : "",
        "losses" : {
          "obscurity" : 0.8
        },
        "agentLimit" : 1,
        "title" : "Desinformation",
        "tag" : "desinformation"
      }, {
        "imgsrc" : "MoneyChannelling.jpg",
        "tier" : 1,
        "rewards" : {
          "gameCash" : 1000
        },
        "tasks" : [[{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }
          ], [{
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }
          ], [{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }
          ]],
        "sound" : "MoneyChannelling.ogg",
        "inCountry" : "Latin America",
        "losses" : {
          "gameContacts" : 10
        },
        "ETA" : 1469475667571,
        "agentLimit" : 3,
        "title" : "Money channelling",
        "tag" : "moneychannelling",
        "id" : "dcf4e41a5bf5c007gzm"
      }, {
        "imgsrc" : "MoneyChannelling.jpg",
        "tier" : 2,
        "rewards" : {
          "gameCash" : 5000
        },
        "tasks" : [[{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }
          ], [{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }
          ]],
        "sound" : "MoneyChannelling.ogg",
        "inCountry" : "",
        "losses" : {
          "gameContacts" : 25
        },
        "agentLimit" : 3,
        "title" : "Money channelling",
        "tag" : "moneychannelling"
      }, {
        "imgsrc" : "MoneyChannelling.jpg",
        "tier" : 3,
        "rewards" : {
          "gameCash" : 50000
        },
        "tasks" : [[{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "puppet",
              "type" : "stealth",
              "imgsrc" : "puppet.jpg"
            }, {
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }
          ], [{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "MoneyChannelling.ogg",
        "inCountry" : "",
        "losses" : {
          "gameContacts" : 250
        },
        "agentLimit" : 3,
        "title" : "Money channelling",
        "tag" : "moneychannelling"
      }, {
        "imgsrc" : "PokerTable.jpg",
        "tier" : 1,
        "rewards" : {
          "gameCash" : 2500
        },
        "tasks" : [[{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "PokerTable.ogg",
        "inCountry" : "",
        "losses" : {
          "gameCash" : 2500
        },
        "agentLimit" : 2,
        "title" : "Poker Table",
        "tag" : "pokertable"
      }, {
        "imgsrc" : "PokerTable.jpg",
        "tier" : 2,
        "rewards" : {
          "gameCash" : 12500
        },
        "tasks" : [[{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }
          ]],
        "sound" : "PokerTable.ogg",
        "inCountry" : "",
        "losses" : {
          "gameCash" : 12500
        },
        "agentLimit" : 2,
        "title" : "Poker Table",
        "tag" : "pokertable"
      }, {
        "imgsrc" : "PokerTable.jpg",
        "tier" : 3,
        "rewards" : {
          "gameCash" : 62500
        },
        "tasks" : [[{
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "decipher",
              "type" : "electronics",
              "imgsrc" : "decipher.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }
          ], [{
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "PokerTable.ogg",
        "inCountry" : "",
        "losses" : {
          "gameCash" : 62500
        },
        "agentLimit" : 2,
        "title" : "Poker Table",
        "tag" : "pokertable"
      }, {
        "imgsrc" : "LayingLow.jpg",
        "tier" : 1,
        "rewards" : {
          "obscurity" : 0.05
        },
        "tasks" : [[{
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ], [{
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "infiltrate",
              "type" : "stealth",
              "imgsrc" : "infiltrate.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ]],
        "sound" : "LayingLow.ogg",
        "inCountry" : "",
        "losses" : {
          "reputation" : 50
        },
        "agentLimit" : 3,
        "title" : "Laying Low",
        "tag" : "layinglow"
      }, {
        "imgsrc" : "LayingLow.jpg",
        "tier" : 2,
        "rewards" : {
          "obscurity" : 0.25
        },
        "tasks" : [[{
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }
          ], [{
              "name" : "infiltrate",
              "type" : "stealth",
              "imgsrc" : "infiltrate.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ]],
        "sound" : "LayingLow.ogg",
        "inCountry" : "",
        "losses" : {
          "reputation" : 250
        },
        "agentLimit" : 3,
        "title" : "Laying Low",
        "tag" : "layinglow"
      }, {
        "imgsrc" : "LayingLow.jpg",
        "tier" : 3,
        "rewards" : {
          "obscurity" : 0.75
        },
        "tasks" : [[{
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }
          ], [{
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "hit",
              "type" : "operations",
              "imgsrc" : "hit.jpg"
            }
          ], [{
              "name" : "infiltrate",
              "type" : "stealth",
              "imgsrc" : "infiltrate.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ]],
        "sound" : "LayingLow.ogg",
        "inCountry" : "",
        "losses" : {
          "reputation" : 1000
        },
        "agentLimit" : 3,
        "title" : "Laying Low",
        "tag" : "layinglow"
      }, {
        "imgsrc" : "AgentInTrouble.jpg",
        "tier" : 1,
        "rewards" : {
          "agentRecruited" : true,
          "gameCash" : -2000
        },
        "tasks" : [[{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ]],
        "sound" : "AgentInTrouble.ogg",
        "inCountry" : "",
        "losses" : {
          "gameCash" : 1000,
          "gameContacts" : 25
        },
        "agentLimit" : 2,
        "title" : "Agent In Trouble",
        "tag" : "agentintrouble"
      }, {
        "imgsrc" : "AgentInTrouble.jpg",
        "tier" : 2,
        "rewards" : {
          "agentRecruited" : true,
          "gameCash" : -4000
        },
        "tasks" : [[{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }
          ]],
        "sound" : "AgentInTrouble.ogg",
        "inCountry" : "",
        "losses" : {
          "gameContacts" : 50,
          "gameCash" : 2000
        },
        "agentLimit" : 2,
        "title" : "Agent In Trouble",
        "tag" : "agentintrouble"
      }, {
        "imgsrc" : "AgentInTrouble.jpg",
        "tier" : 3,
        "rewards" : {
          "agentRecruited" : true,
          "gameCash" : -6000
        },
        "tasks" : [[{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }
          ], [{
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }, {
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }
          ]],
        "sound" : "AgentInTrouble.ogg",
        "inCountry" : "",
        "losses" : {
          "gameContacts" : 75,
          "gameCash" : 3000
        },
        "agentLimit" : 2,
        "title" : "Agent In Trouble",
        "tag" : "agentintrouble"
      }, {
        "imgsrc" : "AgentInTrouble.jpg",
        "tier" : 4,
        "rewards" : {
          "agentRecruited" : true,
          "gameCash" : -50000
        },
        "tasks" : [[{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }
          ], [{
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }, {
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }
          ]],
        "sound" : "AgentInTrouble.ogg",
        "inCountry" : "",
        "losses" : {
          "gameContacts" : 175,
          "gameCash" : 25000
        },
        "agentLimit" : 2,
        "title" : "Agent In Trouble",
        "tag" : "agentintrouble"
      }, {
        "imgsrc" : "AgentInTrouble.jpg",
        "tier" : 5,
        "rewards" : {
          "agentRecruited" : true,
          "gameCash" : -100000
        },
        "tasks" : [[{
              "name" : "tap",
              "type" : "electronics",
              "imgsrc" : "tap.jpg"
            }, {
              "name" : "monitor",
              "type" : "electronics",
              "imgsrc" : "monitor.jpg"
            }, {
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "improv",
              "type" : "stealth",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "close_combat",
              "type" : "operations",
              "imgsrc" : "close_combat.jpg"
            }, {
              "name" : "hide",
              "type" : "stealth",
              "imgsrc" : "hide.jpg"
            }
          ], [{
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }, {
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }, {
              "name" : "improv",
              "type" : "operations",
              "imgsrc" : "improv.jpg"
            }
          ], [{
              "name" : "improv",
              "type" : "electronics",
              "imgsrc" : "improv.jpg"
            }, {
              "name" : "pursuit",
              "type" : "operations",
              "imgsrc" : "pursuit.jpg"
            }
          ]],
        "sound" : "AgentInTrouble.ogg",
        "inCountry" : "",
        "losses" : {
          "gameContacts" : 375,
          "gameCash" : 50000
        },
        "agentLimit" : 2,
        "title" : "Agent In Trouble",
        "tag" : "agentintrouble"
      }
    ],
    "enhancements" : [{
        "description" : "Accept Tier 1 Missions",
        "level" : 1,
        "name" : "Operation I.",
        "prerequisites" : [],
        "price" : {
          "cash" : 0,
          "contacts" : 0
        },
        "type" : "capability"
      }, {
        "description" : "Accept Tier 2 Missions",
        "level" : 2,
        "name" : "Operation II.",
        "prerequisites" : [{
            "name" : "Operation I.",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 1000,
          "contacts" : 10
        },
        "type" : "capability"
      }, {
        "description" : "Accept Tier 3 Missions",
        "level" : 3,
        "name" : "Good Label",
        "prerequisites" : [{
            "name" : "Operation II.",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 50000,
          "contacts" : 500
        },
        "type" : "capability"
      }, {
        "description" : "Accept Tier 4 and campaign missions",
        "level" : 4,
        "name" : "Higher Level",
        "prerequisites" : [{
            "name" : "Good Label",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 1000000,
          "contacts" : 1000
        },
        "type" : "capability"
      }, {
        "description" : "Accept Tier 5 Missions",
        "level" : 5,
        "name" : "Top Class",
        "prerequisites" : [{
            "name" : "Higher Level",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 5000000,
          "contacts" : 5000
        },
        "type" : "capability"
      }, {
        "description" : "Hire and Train Agents up to Rank 3",
        "level" : 1,
        "name" : "Basic Training",
        "prerequisites" : [],
        "price" : {
          "cash" : 0,
          "contacts" : 0
        },
        "type" : "leadership"
      }, {
        "description" : "Hire and Train Agents up to Rank 6",
        "level" : 2,
        "name" : "Crash Course",
        "prerequisites" : [{
            "name" : "Basic Training",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 500,
          "contacts" : 25
        },
        "type" : "leadership"
      }, {
        "description" : "Hire and Train Agents Up to Rank 8",
        "level" : 3,
        "name" : "Training Grounds",
        "prerequisites" : [{
            "name" : "Crash Course",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 2500,
          "contacts" : 25
        },
        "type" : "leadership"
      }, {
        "description" : "Hire and Train Agents Up to Rank 10. Some special agents may offer you their services.",
        "level" : 4,
        "name" : "Focus Training I.",
        "prerequisites" : [{
            "name" : "Training Grounds",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 12500,
          "contacts" : 50
        },
        "type" : "leadership"
      }, {
        "description" : "Hire and Train Agents Up to Rank 12. Special Missions required for such promotion.",
        "level" : 5,
        "name" : "Focus Training II.",
        "prerequisites" : [{
            "name" : "Focus Training I.",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 50000,
          "contacts" : 150
        },
        "type" : "leadership"
      }, {
        "description" : "Hired Gun equipment can be purchased.",
        "name" : "Locals",
        "prerequisites" : [],
        "price" : {
          "cash" : 0,
          "contacts" : 0
        },
        "type" : "toys"
      }, {
        "description" : "Handy Kit equipment can be purchased",
        "name" : "Workshop",
        "prerequisites" : [],
        "price" : {
          "cash" : 0,
          "contacts" : 0
        },
        "type" : "toys"
      }, {
        "description" : "Fake passports equipment can be purchased",
        "name" : "Forger",
        "prerequisites" : [],
        "price" : {
          "cash" : 0,
          "contacts" : 0
        },
        "type" : "toys"
      }, {
        "description" : "Heavy Arms equipment can be purchased",
        "name" : "Arms Dealer",
        "prerequisites" : [],
        "price" : {
          "cash" : 2500,
          "contacts" : 20
        },
        "type" : "toys"
      }, {
        "description" : "Custom Tools equipment can be purchased",
        "name" : "Laboratory",
        "prerequisites" : [],
        "price" : {
          "cash" : 2500,
          "contacts" : 20
        },
        "type" : "toys"
      }, {
        "description" : "Drugs Control equipment can be purchased",
        "name" : "Pharmacy",
        "prerequisites" : [],
        "price" : {
          "cash" : 2500,
          "contacts" : 20
        },
        "type" : "toys"
      }, {
        "description" : "Protective Gear equipment can be purchased",
        "exclusive" : true,
        "name" : "Stork Ind.",
        "prerequisites" : [],
        "price" : {
          "cash" : 10000,
          "contacts" : 10
        },
        "type" : "toys"
      }, {
        "description" : "WPAS equipment can be purchased",
        "exclusive" : true,
        "name" : "Army Level Crypto",
        "prerequisites" : [],
        "price" : {
          "cash" : 10000,
          "contacts" : 10
        },
        "type" : "toys"
      }, {
        "description" : "DCP equipment can be purchased",
        "exclusive" : true,
        "name" : "Cleaning Service",
        "prerequisites" : [],
        "price" : {
          "cash" : 10000,
          "contacts" : 10
        },
        "type" : "toys"
      }, {
        "description" : "Mission Bank Robbery",
        "missiontag" : "bankrobbery",
        "name" : "Nostalgia",
        "prerequisites" : [{
            "name" : "Good Label",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 10000,
          "contacts" : 100
        },
        "type" : "operationsscope"
      }, {
        "description" : "Mission An Old Debt",
        "missiontag" : "anolddebt",
        "name" : "Side Quest",
        "prerequisites" : [{
            "name" : "Good Label",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 10000,
          "contacts" : 100
        },
        "type" : "operationsscope"
      }, {
        "description" : "Mission Prison Break",
        "missiontag" : "prisonbreak",
        "name" : "We Got the Power",
        "prerequisites" : [{
            "name" : "Good Label",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 10000,
          "contacts" : 100
        },
        "type" : "operationsscope"
      }, {
        "description" : "Mission Silence Witness",
        "missiontag" : "silencewitness",
        "name" : "Repaying the favor",
        "prerequisites" : [{
            "name" : "Good Label",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 10000,
          "contacts" : 100
        },
        "type" : "operationsscope"
      }, {
        "description" : "Mission In Inner Circle",
        "missiontag" : "afriendininnercircle",
        "name" : "Gala in Opera house",
        "prerequisites" : [{
            "name" : "Good Label",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 10000,
          "contacts" : 100
        },
        "type" : "operationsscope"
      }, {
        "description" : "Mission Destroy Evidence",
        "missiontag" : "destroyevidence",
        "name" : "You can't see me",
        "prerequisites" : [{
            "name" : "Good Label",
            "type" : "enhancement"
          }
        ],
        "price" : {
          "cash" : 10000,
          "contacts" : 100
        },
        "type" : "operationsscope"
      }
    ],
    "constants" : {
      "agentsPriceList" : {
        "1" : 100,
        "2" : 550,
        "3" : 1000,
        "4" : 5000,
        "5" : 10000,
        "6" : 50000
      },
      "missionsPriceList" : {
        "1" : {
          "cash" : 0,
          "contacts" : 3
        },
        "2" : {
          "cash" : 10,
          "contacts" : 3
        },
        "3" : {
          "cash" : 100,
          "contacts" : 3
        },
        "4" : {
          "cash" : 1000,
          "contacts" : 10
        },
        "5" : {
          "cash" : 10000,
          "contacts" : 20
        }
      },
      "started" : 1452338437180
    },
    "agentsforhire" : [],
    "countries" : [{
        "name" : "US",
        "reputation" : 0,
        "obscurity" : 1
      }, {
        "name" : "West Europe",
        "reputation" : 0,
        "obscurity" : 1
      }, {
        "name" : "Russia",
        "reputation" : 0,
        "obscurity" : 1
      }, {
        "name" : "Arabia",
        "reputation" : 0,
        "obscurity" : 1
      }, {
        "name" : "SouthEast",
        "reputation" : 0,
        "obscurity" : 1
      }, {
        "name" : "Latin America",
        "reputation" : 0,
        "obscurity" : 1
      }
    ],
    "trainingtable" : [{
        "rank" : 1,
        "xp" : 30,
        "slots" : 1,
        "statstotal" : 7
      }, {
        "rank" : 2,
        "xp" : 60,
        "slots" : 1,
        "statstotal" : 8
      }, {
        "rank" : 3,
        "xp" : 100,
        "slots" : 2,
        "statstotal" : 8
      }, {
        "rank" : 4,
        "xp" : 210,
        "slots" : 2,
        "statstotal" : 9
      }, {
        "rank" : 5,
        "xp" : 350,
        "slots" : 2,
        "statstotal" : 10
      }, {
        "rank" : 6,
        "xp" : 550,
        "slots" : 2,
        "statstotal" : 11
      }, {
        "rank" : 7,
        "xp" : 810,
        "slots" : 2,
        "statstotal" : 12
      }, {
        "rank" : 8,
        "xp" : 1150,
        "slots" : 3,
        "statstotal" : 12
      }, {
        "rank" : 9,
        "xp" : 2230,
        "slots" : 3,
        "statstotal" : 13
      }, {
        "rank" : 10,
        "xp" : 4000,
        "slots" : 3,
        "statstotal" : 14
      }
    ],
    "features" : {
      "paid" : {
        "equipments" : {
          "ETAdelay" : 300000
        }
      },
      "unpaid" : {
        "equipments" : {
          "ETAdelay" : 600000
        }
      }
    },
    "options" : {
      "dolcevita" : true,
      "revenge" : false,
      "collector": false
    }
  }
});

export default Game;
