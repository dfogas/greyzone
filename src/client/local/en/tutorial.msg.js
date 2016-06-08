const TutorialMsg = {
  agentinarmory: `Agent here can be given equipment.`,
  agentonmission: `Drag agent here and the mission can start.`,
  armoryScreen: `<div id='ArmoryTutorial'><h2>Armory Help</h2>Equip agent for mission here.
    For equipment effects look in help/equipments in<Link to='help'>About/Help</Link></div>.`,
  briefingScreen: `<div id='BriefingTutorial'><h2>Briefing Room Help</h2>Briefing (as in Briefing Room) enables you
    to fully manage missions that your organization currently has. Missions
    can be viewed as opportunities, but also as threats.
    Ultimately they are the means by which game progresses.<br />
    You select mission by clicking its title.<br />
    Mission can expire, watch for timer on them.<br />
    Some missions are forced upon your organization,<br />
    i.e. if you ignore or pass them, they will automatically take their toll.</div>`,
  button: `What to do here.`,
  commandScreen: `<div id='CommandTutorial'><h2>Command Center Help</h2>This is intended to be a control
    point of players interaction. However it is not designed yet.</div>`,
  dashboardScreen: `<div id='DashboardTutorial'><h2>Dashboard Help</h2>Dashboard is the overview of all important points of the game.<br />
    On the right there is navigation menu to change to one of dashboard screen.<br />
    There is a contextual and event-reaction-based help as well.<br />
    Navigational buttons enable you to go to other screens, that have their 'h' keypress helps as well.</div>`,
  equipmentslot: `Drag icon here.`,
  missionScreen: `<div id='MissionTutorial'><h2>Mission Help</h2>Mission screen is divided to three parts.
    Left side of the screen is where the tasks for mission are displayed and that is first part named TaskTier.
    In the bottom part of TaskTier are displayed Rewards and Losses of Current Mission.<br />
    Middle part called TableTop is reserved for Mission interactions like dice throws and puttin aside dice
    for retries. The right side is for part where agents are located and also for effects taking place due to
    equipment uses.</div>`
};

export default TutorialMsg;
