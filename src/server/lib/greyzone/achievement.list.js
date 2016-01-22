/*
  list of achievements structs
  identified by name
*/

const AchievementList = [{
  name: 'Tutorial',
  tutorAgents: {
    assigningTask: false,
    backFromTask: false,
    equiping: false,
    hiring: false,
    rankingUp: false,
    dismissing: false
  },
  tutorMissions: {
    equiping: false,
    equipmentuse: {
      tier1: false,
      tier2: false,
      cdp: false,
      wpas: false,
      protectiveGear: false
    },
    diceBurned: false,
    failure: false,
    starting: false,
    success: false,
    taskCompleted: false
    },
    tutorDashboard: {
      acceptingMission: false,
      buyingEnhancemnts: false,
      discoverAchievements: false,
      discoverOptions: false,
      discoverStatuses: false
    }
  }, {
    name: 'City Terror',
      initialInvestment: {cash: 1000000, contacts: 1000},
      missions: {
        undergroundNetwork: false,
        dirtyBomb: false,
        cityDeadlock: false
      }
  }, {
    name: 'Orbit Weapon',
    initialInvestment: {cash: 1000000, contacts: 1000},
    missions: {
      secretConstructionSite: false,
      tightSpot: false,
      starWarsDemonstration: false
    }
  }, {
    name: 'Golden Cash Reserves',
    initialInvestment: {cash: 1000000, contacts: 1000},
    missions: {
      stirWaters: false,
      planConduct: false,
      goldDispersion: false
    }
  }, {
    name: 'We Know Everything',
    initialInvestment: {cash: 1000000, contacts: 1000},
    missions: {
      plantSeeds: false,
      buildInfrastructure: false,
      totalTreaty: false
    }
  }, {
    name: 'Immensely Rich',
    initialInvestment: {cash: 100000000},
    missions: {}
  }, {
    name: 'The Greatest Con',
    initialInvestment: {cash: 100000, contacts: 10000},
    missions: {
      facialReconstruction: false,
      purgeElectronicTrace: false,
      newIdentityPackage: false
    }
  }, {
    name: 'Collector Of Fine Arts',
    initialInvestment: {cash: 10000000, contacts: 10000},
    missions: {
      privateCollection: 0
    }
  }, {
    name: 'Philantrope',
    initialInvestment: {cash: 1000000, contacts: 1000},
    missions: {
      fightClimaChange: false,
      protectWildlife: false,
      saveThePlanet: false
    }
  }, {
    name: 'World is Safe Again',
    initialInvestment: {cash: 1000000, contacts: 1000},
    missions: {
      pursuitMaster: false,
      getDominated: false,
      reverseSides: false
    }
  }];

export default AchievementList;
