const defaultActiveMission = {
  title: 'Default Mission',
  tasks: [],
  inCountry: '',
  rewards: {reputation: 0},
  losses: {reputation: 0},
  agentLimit: 1,
  agentsonmission: [],
  taskscompleted: [],
  mission: {
    currenttask: {
      taskno: null,
      remainingdices: [],
      dicesthrown: [],
      diceslock: false,
      agentontask: null
    }
  },
  equipmenteffects: {
    lockeddice: null,
    actionchoose: null,
    damageprotocol: false
  },
  started: false
};

export default defaultActiveMission;
