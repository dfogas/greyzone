import helpMsg from './en/help';
import introMsg from './en/intro';
import conceptsMsg from './en/concepts';

const ENGLISH = {
  app: {
    madeByHtml: `Este v9.2 from <a href="https://twitter.com/steida">steida</a>`
  },
  armory: {
    title: 'Armory'
  },
  auth: {
    form: {
      button: {
        login: 'Login',
        signup: 'Sign up'
      },
      hint: '',
      invalidPassword: 'Invalid Password chosen',
      legend: {
        login: 'Log In',
        signup: 'Sign Up'
      },
      placeholder: {
        email: 'your@email.com',
        organization: 'Organization e.g. Spectre',
        password: 'password'
      },
      wrongPassword: 'Wrong password'
    },
    logout: {
      button: 'Logout'
    },
    lprecover: {
      title: 'Recover Lost Password',
      placeholder: 'Email',
      message: 'Fill in email for which you want to recover password',
      legend: 'Password Recover',
      button: 'Send'
    },
    reauthentication: {
      title: 'Revalidating signup',
      placeholder: {
        email: 'Email',
        password: 'New password'
      },
      legend: 'Set Up New Password',
      button: 'Confirm'
    },
    signup: {
      button: 'Back To Login',
      complete: 'Signup completed',
      title: 'Sign Up'
    },
    title: 'Login'
  },
  briefing: {
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
  dashboard: {
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
      missionaccept: {
        button: {
          acceptMission: 'Accept'
        }
      }
    },
    title: 'Dashboard(protected)'
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
