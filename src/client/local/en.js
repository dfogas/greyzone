import aboutMsg from './en/about.msg';
import agentsMsg from './en/agent.msg';
import authMsg from './en/auth.msg';
import campaignsMsg from './en/campaigns.msg';
import conceptsMsg from './en/concepts.msg';
import dashboardMsg from './en/dashboard.msg';
import developersMsg from './en/developers.msg';
import endsMsg from './en/ends.msg';
import gameendsMsg from './en/gameends.msg';
import helpMsg from './en/help.msg';
import introMsg from './en/intro.msg';
import missionDescriptionsMsg from './en/mission.description.msg';
import storiesMsg from './en/stories.msg';
import tutorialMsg from './en/tutorial.msg';

const ENGLISH = {
  about: aboutMsg,
  agents: agentsMsg,
  app: {
    madeByHtml: `Este v9.2 from <a href="https://twitter.com/steida">steida</a>`
  },
  armory: {
    screen: {
      label: `Armory`
    },
    title: 'Armory'
  },
  auth: authMsg,
  briefing: {
    missionlist: {
      headers: {
        ETA: 'ETA',
        pass: 'Pass',
        region: 'Region',
        specials: 'Specials',
        tier: 'Tier',
        title: 'Title'
      }
    },
    screen: {
      label: 'Briefing Room'
    },
    title: 'Briefing Room'
  },
  buttons: {
    agentRankUp: 'Rank Up',
    cancel: 'Cancel',
    confirmHire: 'Confirm Hiring',
    edit: 'Edit',
    hireAgent: 'Screen Candidate',
    save: 'Save',
    missionAccept: 'Ask for a Mission',
    confirmMission: 'Confirm Mission Accept'
  },
  campaigns: campaignsMsg,
  command: {
    screen: {
      label: `Command/Multiplayer`
    },
    title: 'Command Center'
  },
  concepts: conceptsMsg,
  dashboard: dashboardMsg,
  developers: developersMsg,
  equipments: {
    electronics: [
      {name: 'Handy Kit'},
      {name: 'Custom Tools'},
      {name: 'WPAS'}
    ],
    operations: [
      {name: 'Hired Gun'},
      {name: 'Heavy Arms'},
      {name: 'Protective Gear'}
    ],
    stealth: [
      {name: 'Fake Passports'},
      {name: 'Drugs Control'},
      {name: 'DCP'}
    ]
  },
  ends: endsMsg,
  gameends: gameendsMsg,
  help: helpMsg,
  introduction: introMsg,
  login: {
    message: `<p>First time here? - `
  },
  menu: {
    armory: 'Armory',
    briefing: 'Briefing',
    command: 'Command',
    countries: 'Countries',
    dashboard: 'Dashboard',
    headerHtml: `<a href="https://github.com/steida/este">Este.js</a> App`,
    help: 'Help',
    introduction: 'Intro',
    login: 'Login',
    mission: 'Mission',
    signup: 'Sign Up',
    forum: 'Forum'
  },
  mission: {
    buttons: {
      backtomission: 'Back',
      dcp: 'Control Damage',
      escapesequence: 'Admit Failure',
      end: 'Finish Mission',
      success: 'Mission Accomplished!'
    },
    descriptions: missionDescriptionsMsg,
    screen: {
      label: `Mission`
    },
    title: 'Mission'
  },
  navs: {
    dashboardtomission: 'ToMission'
  },
  notFound: {
    continueMessage: 'Continue here please.',
    header: 'This page isn\'t available.',
    message: 'The link may be broken, or the page may have been removed.',
    title: 'Page Not Found'
  },
  payments: {
    sent: {
      title: 'Payment Sent'
    },
    title: 'Payments'
  },
  posts: {
    newPostPlaceholder: 'What is on your mind?',
    emptyList: 'Empty List'
  },
  signup: {
    message: `<p>Create name for your organization here.</p>`
  },
  stories: storiesMsg,
  support: {
    title: 'SupportPage'
  },
  title: `Ghost Struggle`,
  tutorial: tutorialMsg,
  validation: {
    email: `Email address is not valid.`,
    password: `Password must contain at least {minLength} characters.`,
    required: `Please fill out {prop, select,
      email {email}
      password {password}
      other {'{prop}'}
    }.`
  }
};

export default ENGLISH;
