const help = {
  actions: `
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
  equipments: `
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
    <p>
      There are some costs for using equipments AND its use might not always work.
      The chances for it are tied to whether agent that uses the equipment belongs to the
      class equipment is type of.
      Operative - operations(red), Technician - electronics(green), Spy - stealth(yellow).
      If that is the case chance of backfiring(agent will incur fatigue and will not be
      able to be assigned to next mission until she recovers) is 25%, else it is 50% and
      chance of equipment not working is 10% and 20% respectively. 
    </p>
  `,
  introduction: `After reading links in Introduction group, you have the idea of
    what you are doing, but how. Reading this section should help you.`,
  missionProgress: `
    <ul class='mission-progress'><h2>Gameplay</h2>
      <li class='mission-progress'><em>By drag&drop equip your agents for the mission in Armory.</em></li>
      <li class='mission-progress'><em>Hit mission card to select it in Briefing.</em></li>
      <li class='mission-progress'><em>After selecting mission assign the agents by drag&drop</em></li>
      <li class='mission-progress'><em>Go to mission screen.</em></li>
      <li class='mission-progress'><em>Assign agent and start mission, you are in the mission mode now.</em></li>
      <li class='mission-progress'><em>Six-sided dice mechanism is used, see below Actions.</em></li>
      <li class='mission-progress'><em>Task completion is check against agent's actions.</em></li>
      <li class='mission-progress'><em>Clicking the equipment of agent on task will trigger its effect.</em></li>
      <li class='mission-progress'><em>Sacrificing one dice will enable rolling again.</em></li>
      <li class='mission-progress'><em>Use Help on Equipments to learn about equipment effects.</em></li>
      <li class='mission-progress'><em>MissionSuccess? Congrats, rewards automatically gained. Do another!</em></li>
      <li class='mission-progress'><em>MissionFail? Some bad things may have happened to you...</em></li>
    </ul>
  `,
  segments: `
    <ul>
      <h2>Game segments</h2>
      <li class='game-segments'>Command - overview of world intended for multiplayer features</li>
      <li class='game-segments'>Dashboard - basic overview and control of the game</li>
      <li class='game-segments'>Armory - equip your agents for the mission, increasing their chances</li>
      <li class='game-segments'>Briefing - overview of current missions and deploying of agents to missions</li>
      <li class='game-segments'>Mission - the main deal of game magic happens there, your success made here</li>
    </ul>
  `,
  terminology: `
    <ul class='terminology'>
      <h2>Terminology</h2>
      <li class='terminology'>
        <em>Organization - agents, missions and other game assets, that you manage</em>
      </li>
      <li class='terminology'>
        <em>Reputation - intended as measure of your success for comparison</em>
      </li>
      <li class='terminology'>
        <em>Obscurity - nature of your business require your organization to remain in shadow</em>
      </li>
      <li class='terminology'>
        <em>
          Mission - consists of tasks, which constists of agent action requirements.
        </em>
      </li>
      <li class='terminology'>
        <em>Agent - having set of skills, she serves as mean to succeed in mission</em>
      </li>
      <li class='terminology'>
        <em>Equipment - intended for agents, to be used at mission
      </li>
      <li class='terminology'>
        <em>Cash - dollar or ruble, yuan or peseta cash provides you with necessary liquidity.</em>
      </li>
      <li class='terminology'>
        <em>Contacts - having the links to people in right places is vital, for your operation.</em>
      </li>
    </ul>
  `
};

export default help;
