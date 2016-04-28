import authMsg from './en/auth.msg';
import conceptsMsg from './en/concepts.msg';
import dashboardMsg from './en/dashboard.msg';
import endsMsg from './en/ends.msg';
import gameendsMsg from './en/gameends.msg';
import helpMsg from './en/help.msg';
import introMsg from './en/intro.msg';

const ENGLISH = {
  app: {
    madeByHtml: `Este v9.2 from <a href="https://twitter.com/steida">steida</a>`
  },
  armory: {
    title: 'Armory'
  },
  auth: authMsg,
  briefing: {
    missionlist: {
      headers: {
        ETA: 'ETA',
        pass: 'Pass',
        region: 'Region',
        tier: 'Tier',
        title: 'Title'
      }
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
  command: {
    title: 'Command Center'
  },
  concepts: conceptsMsg,
  dashboard: dashboardMsg,
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
    message: `<p>If you are on this page for the first time, click on the button Sign Up.</p>
      <p>Else, log in with your credentials as you stated them when you signed up.</p>`
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
    title: 'Mission',
    buttons: {
      backtomission: 'Back',
      dcp: 'Control Damage',
      escapesequence: 'Initiate Escape Sequence',
      end: 'Finish Mission',
      success: 'Mission Accomplished!'
    }
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
  posts: {
    newPostPlaceholder: 'What is on your mind?',
    emptyList: 'Empty List'
  },
  signup: {
    message: `<p>Here you are going to create the name of your organization.
      On the email will be sent message with the link to activate a game account.
      After clicking it and you can log in and can start scheming.</p>`
  },
  support: {
    title: 'SupportPage'
  },
  title: `Ghost Struggle`,
  tutorial: {
    agentinarmory: `Agent here can be given equipment.`,
    agentonmission: `Drag agent here and the mission can start.`,
    equipmentslot: `Drag icon here.`
  },
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
