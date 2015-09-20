const defaultActiveMission = {
  title: 'Default Mission',
  tasks: [],
  inCountry: '',
  rewards: {},
  losses: {},
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
