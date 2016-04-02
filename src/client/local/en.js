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
  confirmations: {
    cancelEdit: `You have unsaved changes. Are you sure you want to cancel them?`
  },
  dashboard: {
    agenthire: {
      button: {
        hireAgent: 'Hire Agent'
      },
      input: {
        rank: 'Rank',
        specialist: 'Specialist'
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
  help: {
    actionsHtml: `
      <ul class='list-of-actions'><h2>Actions</h2>
        <li class='list-of-actions pursuit'><em>pursuit - escape or pursue in the true Bond fashion</em></li>
        <li class='list-of-actions hit'><em>hit - dispose of, put to sleep, send your regards ...</em></li>
        <li class='list-of-actions close_combat'><em>close combat - wrestle or knife down the opposing party</em></li>
        <li class='list-of-actions decipher'><em>decipher - cracking the device or code in brute or refined fashion</em></li>
        <li class='list-of-actions tap'><em>tap - like as in tap the apartment</em></li>
        <li class='list-of-actions monitor'><em>monitor - keep an eye on the guy</em></li>
        <li class='list-of-actions hide'><em>hide - remain unseen, go undetected, be the ghost</em></li>
        <li class='list-of-actions infiltrate'><em>infiltrate - the group, earn their trust and betray them</em></li>
        <li class='list-of-actions puppet'><em>puppet - exploit somebody gullible enough to trust you</em></li>
        <li class='list-of-actions improvAll'><em>improv - comes in all three blends...</em></li>
        <li class='list-of-actions failAll'><em>fail - about 1/6 of times you simply fail ...</em></li>
      </ul>
      <ul class='list-of-skills'><h3>Agent Skills</h3>
        <li class='agent-skills operations'>operations - actions are pursuit, hit, close combat, each with 1/6 probability</li>
        <li class='agent-skills electronics'>electronics - actions are decipher, tap, monitor, each with 1/6 probability</li>
        <li class='agent-skills stealth'>stealth - actions are hide, infiltrate, puppet, each with 1/6 probability</li>
      </ul>
      <p>
        Each dice has 2/6 probability of improv result of appropriate skill and 1/6 probability of fail result.
      </p>
    `,
    equipmentsHtml: `
      <h2>Listing of agents equipments</h2>
      <ul>
        <ul class='equipment-tier operations'>
          <li class='agent-equipment HiredGun'>Hired Gun - +1 operations die</li>
          <li class='agent-equipment HeavyArms'>Heavy Arms - 1 any operations result(no improv)</li>
          <li class='agent-equipment ProtectiveGear'>Protective Gear - repeat all dice throw</li>
        </ul>
        <ul class='equipment-tier electronics'>
          <li class='agent-equipment HandyKit'>Handy Kit - +1 electronics die</li>
          <li class='agent-equipment CustomTools'>Custom Tools - 1 any electronics result(no improv)</li>
          <li class='agent-equipment WPAS'>WPAS - hide one dice result for later</li>
        </ul>
        <ul>
          <li class='agent-equipment FakePassports'>Fake passports - +1 stealth die</li>
          <li class='agent-equipment DrugsControl'>Drugs Control - 1 any stealth result(no improv)</li>
          <li class='agent-equipment DCP'>DCP - alternative mission end, only reputation is lost</li>
        </ul>
      </ul>
    `,
    missionProgressHtml: `
      <p>
        In mission processing six-sided dice mechanism is used. Display of
        probabilities of success is paid feature.
        You go through the mission sequence by assigning agent from agents on
        mission to each task and then proceed with action.
        If the throw is not successfull you may try again after sacrificing one
        of dies, which of course lowers your chances, to the
        point where you have no chance of succeeding.
        Desirable result is fulfillment of all tasks, in which case is mission successfull.
        Certain agent's equipments have different effects on the flow of mission,
        but to that later.
      </p>
      <hr />
      <ul class='mission-progress'><h2>Mission progress</h2>
        <li class='mission-progress'><em>drag&drop to equip your agents for the mission in Armory </em></li>
        <li class='mission-progress'><em>Hit mission card to select it in Briefing</em></li>
        <li class='mission-progress'><em>After Selecting Mission assign the agents by drag&drop to it</em></li>
        <li class='mission-progress'><em>Task completion is check against agent's actions, actions depend on skill and luck</em></li>
        <li class='mission-progress'><em>Down on your luck? Try clicking the equipment, maybe it'll do something.</em></li>
        <li class='mission-progress'><em>Trashing your dice will enable rolling again.</em></li>
        <li class='mission-progress'><em>DCP will save your ass, if things don't go as planned.</em></li>
        <li class='mission-progress'><em>The only equipment hard to understand is WPAS, others should be piece of cake.</em></li>
        <li class='mission-progress'><em>Initializing escape sequence will get you out of mission mode, but mission is fail.</em></li>
        <li class='mission-progress'><em>MissionSuccess? Congrats, pick up your price and do another!</em></li>
      </ul>
    `,
    segmentsHtml: `<hr />
      <ul>
        <h2>Game segments</h2>
        <li class='game-segments'>Command - overview of world with country stats for organization</li>
        <li class='game-segments'>Dashboard - not being to fancy, gives you basic overview of current state of things</li>
        <li class='game-segments'>Armory - you can equip your agents here for the mission, as well as check counts.</li>
        <li class='game-segments'>Briefing - you can deploy your agents on the mission here and view current missions</li>
        <li class='game-segments'>Mission - the main deal of game magic happens here, your success is made or lost</li>
      </ul>
    `,
    terminologyHtml: `<hr />
      <ul class='terminology'>
        <h2>Terminology</h2>
        <li class='terminology'>
          <em>Reputation - good or bad, used to measure the *quality* of your - service.</em>
        </li>
        <li class='terminology'>
        <em>Obscurity - the nature of your enterprise requires you to be unnoticed
        by traditional security forces and to avoid them.</em>
        </li>
        <li class='terminology'>
          <em>Mission - consists of tasks, which constists of agent action requirements.
          Rewards are given if successfully carried out, else losses are booked.</em>
        </li>
        <li class='terminology'>
          <em>Agent - professional or amateur, the guy who does heavy lifting,
          risking his neck in the action</em>
        </li>
        <li class='terminology'>
          <em>Cash - dollar or ruble, yuan or peseta cash provides you with necessary liquidity.</em>
        </li>
        <li class='terminology'>
          <em>Contacts - having the links to people in right places is vital, for your operation.</em>
        </li>
      </ul>
    `,
    title: 'HelpPage'
  },
  introduction: {
    overviewHtml: `
      <h2>Introduction</h2>
      <p>
        Does a man choose his profession, or does profession choose a man?
        I chose not to be a - what? - Being a villain??
        Villain might be too of a strong word, let's say I am not the one
        to be bound by conventions about what is good and evil,
        and that I do things my way.
      </p>
      <p>
        People like to have order. Give them order and you have their vote in the elections.
        Then have the police and special forces to do this task given by public.
        Does that mean that order is automatically good? Of course it does, for most.
      </p>
      <p>
        My organization is not so narrow-minded. Do you need money real fast?
        Or to get rid of that pesky competitor,
        bringing in that new piece to your prized collection?
        To protect or to silence key witness?
        We do that.
        Turn to us, to professionals. We get things done.
      </p>
      <p>
        As always, this lifestyle does have its price. I can't turn up,
        at the Social Security Office
        and start asking for aliments. What have you been doing so far?
        Oh, I was a head of secret
        organization doing this here and that over there - Al Pacino style,
        fully visualizing it right now ...
      </p>

      <h3>Game Features</h3>
      <p>
        GhostStruggle is a multiplayer web game designed with intention
        to provide interesting playing mechanism with emphasis on functionality, first,
        and then on beauty, second.
        As it seems that perfection is achieved only when there's nothing left to
        take away rather than still adding new features, it strives to keep only
        necessary features for core game mechanisms and keep all other bullshit away.
      </p>
      <p>
        It is designed as commercial product, but emphasis being on playability
        and employing your brain, not on serving you fancy content and draining your
        credit card for overpriced collection pieces.
      </p>

      <h3>What is it and how do I play it?</h3>
      <p>
        By signup to GhostStruggle game you become a head of illegal organization,
        which is not necessarily a bad thing, except it is.
        The organization provides all kinds of - services,
        that are usually frowned upon by state organizations, mainly because
        they consider them their monopoly.
      </p>
      <p>
        After signup, you log in and the game pretty much guides you through its
        interface then, though I strongly recommend reading help page as well.
      </p>
      <p>
        You direct organization in strategical AND tactical sense
        by managing its resources and staying hidden from official probing,
        while upholding respectable reputation.
        To fullfill this objective you hire agents, equip them with tools for their job,
        assign them to missions and with rewards for success enhance organization
        to higher levels, with agents getting better along the way as well.
      </p>
      <p>
        With new missions new possibilities open but the inherent nature of
        your enterprise is filled with dangers as well, so be aware
        that your game might come quickly to an end, if you mismanage or
        simply risk too much at once and have bad luck.
      </p>
      <p>
        Custom campaigns are here to challenge you to reach for achievements and
        provide a bit of story and destiny choosing.
        Higher level also opens up multiplayer, where you compete with other players
        on global level, giving you possibility to directly hit them with your crew,
        but you may also stick single player only.
      </p>
      <p>
        That's about it - you start, you play, you finish, earlier or later
        for the fun of playing as long as you'll like. Enjoy it.
      </p>
    `,
    title: 'About Ghost Struggle'
  },
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
