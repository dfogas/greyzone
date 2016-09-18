import determiningIcon from '../../lib/bml/determiningicon';

const TutorialMsg = {
  agentinarmory: `Drop agent here, so that she can be given equipment.`,
  agentonmission: `Drag agent here and the mission can start.`,
  armoryScreen: `
    <h2>Armory Help</h2>
    <p>Equip agent for mission here.
      <ul><span style="background-color: red">Operations</span>
        <li>Hired Gun +1 operations die,</li>
        <li>Heavy Arms any operations result(no improv),</li>
        <li>Protective Gear choose dices for repeated throw</li>
      </ul>
      <ul style="background-color: "><span style="background-color: paleturquoise">Electronics - bluegreenish</span>
        <li>Handy Kit +1 electronics die,</li>
        <li>Custom Tools any electronics result(no improv),</li>
        <li>WPAS hide one dice result for later, action might not be used to burn dice for repated try</li>
      </ul>
      <ul><span style="background-color: gold">Stealth - gold</span>
        <li>Fake passports +1 stealth die,</li>
        <li>Drugs Control 1 any stealth result(no improv),</li>
        <li>Damage Control Protocol alternative mission end, only reputation is lost(no multiplayer)</li>
      </ul>
    </p>
  `,
  briefingScreen: `<h2>Briefing Room Help</h2>
    <p>Briefing Room serves as a portal to dealing with missions
    that your organization currently has.</p>
    <p>Missions can be viewed as opportunities, when mission is successful,
    but also as threats, then mission is fail.
    Ultimately, they are the means by which game progresses.</p>
    <p>Mission can expire, watch for timer on it, you can't complete it after that.</p>
    <p>Some missions are forced i.e. if you ignore or pass them, they will automatically take their toll.</p>
    <p>Click the interface items, drag and drop agents to mission displayed.</p>
    `,
  button: `What to do here.`,
  chooseclass: {
    operative: `Pursuits, Fights and Hits`,
    question: `You have done special tasks in the past, what they were more like?`,
    spy: `Manipulation of and Lying to People`,
    technician: `Explosions, Wiring Stuff and Cracking Devices`
  },
  commandScreen: `<h2>Command Center Help</h2><p>This is intended to be a control
    point of players interaction. However it is not properly designed yet.
    For now you can review your missions here.</p>`,
  dashboardScreen: `
    <h2>Dashboard Help</h2>
    <p>Dashboard is the overview of all important points of the game.</p>
    <p>You are selecting which missions here.</p>
    <p>Mission will usually give you one or more of the following items:
      <li>money - ${determiningIcon('gameCash')}</li>
      <li>reputation - ${determiningIcon('reputation')}</li>
      <li>obscurity - ${determiningIcon('obscurity')}</li>
      <li>contacts - ${determiningIcon('gameContacts')}</li>
      They are essential for you but there are and will be many others - e.g.
      ${determiningIcon('attentionLowered')} decreases attention in country, that missions generated.
    </p>
    <p>It also tracks in how much danger your organization is and how much attention
      its missions recieve.</p>
    <p>Also it serves as a entry point to talk to your agents and
    review your agents history(not implemented).</p>
  `,
  equipmentslot: `Drag icon here.`,
  goals: {
    agentrankfour: `Rank up an agent`,
    dolcevitagoal: `Buy 5-star hotel, nightclub network and private jet`,
    firstmission: `Complete first mission`,
    getmoremissions: `Get five other missions`,
    loyalcrew: `Get loyalty of your agents`,
    operationslevelthree: `Get operations to Good Label`
  },
  missionScreen: `<h2>Mission Help</h2>Mission screen is divided to three parts.
    <p>Left side of the screen is where the tasks for mission are displayed - TaskTier.
    In the bottom part of TaskTier are displayed Rewards and Losses of Current Mission.</p>
    <p>Middle part called TableTop is where you interact with game through dice throws, trying
    to complete current task.</p>
    <p>On right side are agents which participate in mission and also for dealing with effects
    that happened due to agent's equipment uses.</p>
    <p>Action buttons appear when appropriate e.g. when ending mission or completing task.
    Pressing them should not be always automatic though.</p>
    `,
  playerhistory: [
    `You barely remember the start of story. It was a hot summer and you were "recuited" by some obscure character.`,
    `You clearly remember the training, it had been intense, and then you were thrown out to wolves.`,
    `Making it through initial trials you established level of confidence that helped you rise in the rank.`,
    `but you were left for dead after one action, considered KIA and you survived and you shouldn't.`,
    `Contacting your good colleague, you kept yourself hiding and under radar, but time has come for risk.`,
    `Monitoring the official and secret message channels, it has come to your attention that there is a hunt on certain criminal underway `,
    `You decided to help her ...`
  ],
  title: `Player's Story`
};

export default TutorialMsg;
