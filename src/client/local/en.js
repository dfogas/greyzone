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
        specials: 'Specials',
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
  developers: {
    button: `Ok, I have read the notice`,
    notice: `
      <h1>Developers notice</h1>
      <h2>Ghost Struggle version Zero</h2>
      <p>
        This game is still before production.
        You can play it, but weird shit might happen, and also you might lose your game saves.
        Also game assets(pictures, texts and other) are too lacking yet.
        So play and enjoy the experience, but bear that in mind.

        Current ends are:
        <ul>Bad Ends:
          <li>Given Up</li>
          <li>Betrayed</li>
          <li>Rich, But Not For Long</li>
        </ul>
        <ul>Good Ends:
          <li>Rich and Covered</li>
        </ul>
      </p>
      <p>
        Recommended is reading Gameplay/Introduction section of About/Help before starting of your game.
      </p>
      <h3>Disclaimer</h3>
      <p>
        Until further notice, I declare Ghost Struggle game a work of art, in order to avoid copyright infringment of used pictures etc.
        and I do not charge anything for it.
      </p>
      <p>
        <em>Warning: Game might include some depictions and hints of violence and/or suggestive scenes, so if that is something you are offended by then do not play it.</em>
      </p>
    `
  },
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
