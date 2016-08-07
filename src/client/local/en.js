import agentsMsg from './en/agent.msg';
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
    message: `<p>"Ghost Struggle" is a non-trivial, non-clicker game for aspiring masterminds, that simply works, possibly
      creates an enjoyable experience as well.</p>
      <p>Theme is espionage, world of secret investigative organizations, and you are put in charge of building up one - your own,
      with your own objectives.</p>
      <p>You leading a secret organization equals you having missions to complete.
      You may participate on missions, as your avatar is represented by one of the agents.</br>
      This not always advisable though - as some missions besides earning considerable rewards,
      may throw you in the prison or even get killed.</p>
      <p>Based on tried and tested dice and cards mechanism, game provides the challenge you've been looking for,
      in an easy and enjoyable way, also offering wide range of tactical approaches.</p>
      It is not always fair and might push some unexpected events your way,
      though always giving some time to react and it is moderately difficult to finish -
      successfully finish,<br />bad ends are abundant and you might quite easily end up facing one.
      Not to worry, replaying is advisable option as the game was designed to be played repeatedly and
      should through its mechanisms introduce new story each time that it is played.</p>
      <p>At its current state there is only one successfull finish. There are going to be purchaseable expansions to game, that
      expand gameplay significantly as well as add interaction with other players, so you may start messing with each other, if you like so.</p>
      <p>Feel free to join and try game in its current development state, and
      possibly leave a feedback on provided email address support@ghoststruggle.com or you might as well join forum(tbd) and if you
      really enjoyed playing it become sponsor with stake in its future by providing financial support via Patreon(tbd), with direct link
      to its creator.</p>`,
    title: `About the game`
  },
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
  developers: {
    button: `Ok, I have read the notice`,
    notice: `
      <h2>Ghost Struggle version Zero</h2>
      <p>
        This game is still before production.
        You can play it, as most of the game mechanisms are in place,
        but weird shit might happen, and also you might lose your game saves.
        Also game assets(pictures, texts and other) are too lacking yet.
        So play and enjoy the experience, but bear that in mind.
      </p>

      <p>
        <h2>Game Ends</h2>
        <ul>Bad Ends:
          <li>Given Up</li>
          <li>Discovered</li>
          <li>Rich, But Not For Long</li>
          <li>Left in Prison</li>
          <li>Killed</li>
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
        All graphic assets are original, but may be based on actually existing people or movie/game characters.
      </p>
      <p>
        You may buy full access to the game in the options menu, when in game (including campaigns).
      </p>
      <p>
        <em>
          Warning: Game might include some depictions and hints of violence and suggestive scenes,
          so if that is something you are offended by then do not play it.
        </em>
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
    message: `<p>Here, you are going to create the name of your organization.
      On the email will be sent message with the link to activate a game account.
      After clicking it and you can log in and can start playing.</p>`
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
