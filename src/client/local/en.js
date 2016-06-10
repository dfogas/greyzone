import authMsg from './en/auth.msg';
import campaignsMsg from './en/campaigns.msg';
import conceptsMsg from './en/concepts.msg';
import dashboardMsg from './en/dashboard.msg';
import endsMsg from './en/ends.msg';
import gameendsMsg from './en/gameends.msg';
import helpMsg from './en/help.msg';
import introMsg from './en/intro.msg';
import missionDescriptionsMsg from './en/mission.description.msg';
import tutorialMsg from './en/tutorial.msg';

const ENGLISH = {
  about: {
    message: `<p>Ghost Struggle is a non-trivial, non-clicker game for aspiring masterminds, that simply works.</p>
      <p>Theme is - contemporary world of hidden organizations, illegal, in their actions not always
      criminal, though.</p>
      <p> Designed with Player experience in mind, intended to be played repeatedly and while there
      are some scripted sequences, <br />the game should through its mechanisms introduce new story each time
      that it is played.</p>
      <p>Game is playable freely but with some features not avaiable to not-paying players.</p>
      <p>The game itself is dependent on random events and is quite hard to finish - successfully finish, <br />bad ends are abundant.</p>
      <p>There are purchaseable expansions to game labeled as campaings, that expand gameplay
      significantly.</p>
      <p>Interaction with other players will be possible in later stages.</p>`,
    title: `About the game`
  },
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
        Recommended is reading Gameplay/Introduction section of About/Help before starting of your game, which is available once you log in.
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
    buttons: {
      backtomission: 'Back',
      dcp: 'Control Damage',
      escapesequence: 'Initiate Escape Sequence',
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
    title: 'Payments'
  },
  posts: {
    newPostPlaceholder: 'What is on your mind?',
    emptyList: 'Empty List'
  },
  signup: {
    message: `<p>Here, you are going to create the name of your organization.
      On the email will be sent message with the link to activate a game account.
      After clicking it and you can log in and can start scheming.</p>`
  },
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
