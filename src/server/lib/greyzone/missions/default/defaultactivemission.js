const defaultActiveMission = {
  title: 'Quiet before the Storm',
  tasks: [],
  inCountry: 'US',
  rewards: {},
  losses: {},
  agentLimit: 0,
  agentsonmission: [],
  taskscompleted: [],
  mission: {
    currenttask: {
      actiondices: [],
      agentlock: false,
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
  started: false,
  tag: 'quietbeforestorm',
  imgsrc: 'BeforeStorm.jpg',
  sound: 'BeforeStorm.ogg'
};

export default defaultActiveMission;
