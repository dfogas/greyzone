const dashboardMsg = {
  enhancements: {
    window: {
      label: `Enhancements`
    }
  },
  screen: {
    label: 'Dashboard'
  },
  strategical: {
    agenthire: {
      button: {
        hireAgent: 'Confirm'
      },
      placeholder: `Here, list of your agents is displayed. It might be so that
        you'll need to hire some specialist. You do that by means of form on the left.
        There is a cap on number of agents that you can have.
        This cap can be expanded by upgrading agents' training facilities in Enhancement
        section. Go have a look there too.`,
      title: 'Hire Agent'
    },
    agentslist: {
      manage: {
        honor: `Honor`,
        leaveinprison: `Let`,
        rescue: `Save`
      },
      status: {
        available: 'Ready',
        prison: 'In Prison',
        rescued: 'Plan for Rescue',
        tired: 'Tired'
      }
    },
    intro: {
      miyako: `Boss, I prepared this interface for you, so that you can manage our operations
        effectively. Let me know, when I can do anything else for you.`,
      sanya: `Hey, so this is where you - brainiac - keep things organized. Cool,
        wake me up when you got something figured out...`
    },
    log: {
      clear: 'Clear Log',
      load: 'Load Log',
      save: 'Save Log'
    },
    missionaccept: {
      button: {
        acceptMission: 'Accept'
      }
    },
    missionresult: {
      fail: {
        operative: ``,
        technician: ``,
        spy: ``
      },
      success: {
        operative: ``,
        technician: ``,
        spy: `<div `
      }
    },
    special: {
      prisonbreak: {
        button: 'Prison Break!',
        text: `There is agent waiting to be rescued from prison.`
      }
    }
  },
  statuses: {
    intro: {
      textHtml: `
        A group of wealthy and classy people passes you by. A memory of how you spent
        sucking up to your rich peers passes your mind.
        Since you have much wider range of capabilities now, you wonder,
        how much of this 'dolce vita' life can you claim for yourself
        without giving yourself up to legal enforcement.
        It didn't take you long to realize, that this is something you always
        wanted...
      `
    },
    tier1: `
      <div id='StatusesTierComplete'>Some text relating to the completion of tier.</div>
    `,
    tier2: `
      <div id='StatusesTierComplete'>Some text relating to the completion of tier.</div>
    `,
    tier3: `
      <div id='StatusesTierComplete'>Some text relating to the completion of tier.</div>
    `,
    tier4: `
      <div id='StatusesTierComplete'>Some text relating to the completion of tier.</div>
    `,
    window: {
      label: `Statuses`
    }
  },
  title: 'Dashboard'
};

export default dashboardMsg;
