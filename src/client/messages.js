export default {
  cz: {
    app: {
      madeByHtml: `uděláno s Este starter kitem v9.2 od <a href="https://twitter.com/steida">steida</a>`
    },
    armory: {
      title: 'Zbrojnice'
    },
    auth: {
      form: {
        button: {
          login: 'Zalogovat se',
          signup: 'Vytvořit účet'
        },
        hint: 'Nápověda: pass1',
        invalidPassword: 'Zvoleno neplatné heslo',
        legend: {
          login: 'Zalogovat se',
          signup: 'Vytvořit účet'
        },
        placeholder: {
          email: 'vas@email.cz',
          password: 'heslo'
        },
        wrongPassword: 'Špatné heslo'
      },
      logout: {
        button: 'Odlogovat se'
      },
      signup: {
        title: 'Účet'
      },
      title: 'Log'
    },
    briefing: {
      title: 'Příprava'
    },
    buttons: {
      agentRankUp: 'Povýšit',
      cancel: 'Zrušit',
      confirmHire: 'Potvrdit najmutí',
      confirmMission: 'Potvrdit přijetí mise',
      edit: 'Editovat',
      hireAgent: 'Najmout agenta',
      missionAccept: 'Mise k přijmutí',
      save: 'Uložit'
    },
    command: {
      title: 'Velitelství'
    },
    confirmations: {
      cancelEdit: `Máte neuložené změny. Chcete je opravdu zrušit?`
    },
    dashboard: {
      title: 'Nástěnka'
    },
    equipments: {
      electronics: [
        {name: 'Příruční balíček'},
        {name: 'Upravené nástroje'},
        {name: 'SASB'}
      ],
      operations: [
        {name: 'Nájemná puška'},
        {name: 'Těžké zbraně'},
        {name: 'Ochranné oblečení'}
      ],
      stealth: [
        {name: 'Falešné doklady'},
        {name: 'Útočné Drogy'},
        {name: 'ÚP'}
      ]
    },
    help: {
      actionsHtml: `<ul class='list-of-actions'>
        <h2>Seznam akcí</h2>
        <li class='list-of-actions pursuit'><em>pursuit - únik a pronásledování</em></li>
        <li class='list-of-actions hit'><em>hit - přestřelka, zabití střelnou zbraní</em></li>
        <li class='list-of-actions close_combat'><em>close combat - rvačka, boj beze zbraně či se zbraněmi na blízko</em></li>
        <li class='list-of-actions decipher'><em>decipher - rozluštění šifry, využití zadních vrátek v softwaru</em></li>
        <li class='list-of-actions tap'><em>tap - nasazení odposlechu, a jiných záznamových prostředků</em></li>
        <li class='list-of-actions monitor'><em>monitor - sledování potenciálních hrozeb, spuštění alarmů</em></li>
        <li class='list-of-actions hide'><em>hide - zamést stopy a schovat se</em></li>
        <li class='list-of-actions infiltrate'><em>infiltrate - získání důvěry a pak její zrazení</em></li>
        <li class='list-of-actions puppet'><em>puppet - využití slabostí ostatních k jejich manipulaci</em></li>
        <li class='list-of-actions'><em>improv - někdy je třeba umět improvizovat</em></li>
        <li class='list-of-actions'><em>fail - jednoduše se to nepovedlo</em></li>
      </ul>
      <ul class='list-of-skills'>Dovednosti agentů
        <li>operations - akce jsou pursuit, hit, close combat, každá s 1/6 pravděpodobnosti</li>
        <li>electronics - akce jsou decipher, tap, monitor, každá s 1/6 pravděpodobností</li>
        <li>stealth - akce jsou hide, infiltrate, puppet, každá s 1/6 pravděpodobností</li>
      </ul>
      <p>Každá kostka má 2/6 pravděpodobnost, že na ni padne improvizace příslušné dovednosti a 1/6 pravděpodobnost neúspěchu.</p>`,
      equipmentsHtml: `tbd
      termin bude dodan`,
      missionProgressHtml: `<p>
        Během průběhu mise je používán mechanismus šestistěnné kostky. Zobrazení pravděpodobnosti úspěchu hodu je placené.
        Posloupnosti průběhu mise procházíte tak, že z agentů na misi vyberete jednoho a přiřadíte jej k aktuálnímu úkolu. Poté provedete akci.
        Pokud hod nebyl úspěšný, po obětování jedné z kostek můžete zkoušet znovu, i když se sníženou pravěpodobnosít úspěchu.
        Vytouženým výsledkem je samozřejmě splnění všech úkolů, v kterémžto případě je mise úspěšná.
        Určitá vybavení agentů mají odlišné efekty na průběh mise, ale k tomu později.
      </p>
      <hr />
      <ul class='mission-progress'><h2>Postup při plnění mise</h2>
        <li class='mission-progress'><em>Vybavte své agenty na misi ve zbrojnici pomocí drag&drop.</em></li>
        <li class='mission-progress'><em>kliknutím na misi ji vyberete.</em></li>
        <li class='mission-progress'><em>po vybrání mise drag&drop karty agenta na misi.</em></li>
        <li class='mission-progress'><em>mise zvolena, agenti vybaveni, přejděte k obrazovce mise.</em></li>
        <li class='mission-progress'><em>Agent drag&drop na vyhrazene misto v misi.</em></li>
        <li class='mission-progress'><em>Použití vybavení zvýší šance.</em></li>
        <li class='mission-progress'><em>Splnění úkolu - akce úkolu odpovídají výsledku agentova hodu.</em></li>
        <li class='mission-progress'><em>Drag&Drop kostky na ikonu pod hodem kostku zničí a dá vám nový hod.</em></li>
        <li class='mission-progress'><em>Začít únikovou sekvenci - mise je neúspěšná, postihy za nesplnění.</em></li>
        <li class='mission-progress'><em>Mise Splněna? Blahopřejeme, odměny byly automaticky připsány na váš účet.</em></li>
      </ul>
      `,
      overviewHtml: `<p>
        Vybírá si muž své povolání, nebo si povolání vybírá jeho?
        Já si nezvolil - co? - Být padouch? - Padouch je možná příliš silné slovo,
        řekněme, že si rád dělám věci po svém,
        nesvázán konvencemi o tom, co je dobré a co špatné.
      </p>
      <p>
        Lidé mají rádi pořádek. Ve volbách dávají hlas tomu, kdo jim pořádek zaručí.
        Ten pak zaúkoluje policii, a své speciální jednotky, aby toto veřejné zadání plnily.
        Znamená to, že pořádek je automaticky dobrý?
        Pro většinu lidí ano, a mají k tomu určitě řádný důvod.
      </p>
      <p>
        Má organizace - není takto úzkoprsá. Potřebujete rychle peníze?
        Zbavit se nepohodlného konkurenta, získat cenný kousek do své sbírky?
        Ochránit či umlčet klíčového svědka? Děláme to.
        Obraťte se na nás, na profesionály. Věci se rozhýbou.
      </p>
      <p>
        Tak jako se vším, tento styl života má svou cenu - nemohu se objevit na úřadě
        a žádat o podporu v případě, že s tím seknu. Co jste doposud dělal?
        Byl jsem hlavou tajné organizace dělající tu ono, a tam tohle - ve stylu Al Pacina,
        úplně tu situaci vidím ...
      </p>`,
      segmentsHtml: `<p>Ve Souboji Duchů(Ghost Struggle) je hráč hlavou ilegální organizace, která
      nabízí různé druhy - služeb, takových, jaké jsou obvykle vyhrazeny pro státní organizace.
      Oficiální či neoficiální organizace násilí jako jsou státy a mafie jsou jeho - partnery.
      TV show BlackList je dobrým přirovnáním, pokud ji sledujete.</p>
      <hr />
      <ul>
        <h2>Game segments</h2>
        <li class='game-segments'>Velitelství - přehled o herní statistice organizace v herním světě</li>
        <li class='game-segments'>Nástěnka - pro základní přehled o stavu organizace</li>
        <li class='game-segments'>Zbrojnice - umožňuje vybavit agenty pro zlepšení jejich šancí.</li>
        <li class='game-segments'>Briefing - zde je možné nasadit agenty na misi a prohlédnout si aktuální mise</li>
        <li class='game-segments'>Mission - zde je hlavní kouzlo hry. Rozhoduje se tu o vašem úspěchu či neúspěchu.</li>
      </ul>`,
      terminologyHtml: `<p>Hráč řídí organizaci po taktické i strategické stránce
      - řídí zdroje, zůstává schován před oficiálními místy, a stará se o udržování kontaktů a profesionální reputace organizace.
      Aby tento cíl plnil hráč posílá agenty, kteří plní jeho rozkazy, na mise.
      </p>
      <hr />
      <ul class='terminology'><h2>Terminology</h2>
        <li class='terminology'><em>Reputation - ukazatel důvěry ve vaší organizaci, tedy ve důvěy ve vaše schopnosti.</em></li>
        <li class='terminology'><em>Obscurity - povaha vaší práce požaduje, aby vaše činnost nebyla běžně zachycována standardními bezpečnostními složkami států..</em></li>
        <li class='terminology'><em>Mise - sestává z úkolů, které sestávají z požadavků na akce agenta. Pokud splněno úspěšně jste odměněni, jinak utrpíte škodu.</em></li>
        <li class='terminology'><em>Agent - ať už profesionál či amatér, jedinec, který nasazuje krk, aby byla mise splněna. Může se stát, že je uvězněn či zabit.</em></li>
        <li class='terminology'><em>Cash - dolar či euro, yuan či peseto, poskytuje likviditu nutnou k provozu vašich operací.</em></li>
        <li class='terminology'><em>Contacts - kontakty na oficiální i neoficiální systémy jako je policie, úřady, celníci atp.</em></li>
      </ul>`,
      title: 'Stránka nápovědy'
    },
    menu: {
      armory: 'Zbrojnice',
      briefing: 'Příprava',
      command: 'Velitelství',
      dashboard: 'Nástěnka',
      headerHtml: `<a href="https://github.com/steida/este">Este.js</a> App`,
      help: 'Nápověda',
      login: 'Log',
      mission: 'Mise',
      signup: 'Vytvoření účtu'
    },
    mission: {
      title: 'Mise',
      buttons: {
        dcp: 'Kontrolované ztráty',
        escapesequence: 'Začít únikovou sekvenci',
        end: 'Konec Mise',
        success: 'Mise Splněna'
      }
    },
    notFound: {
      continueMessage: 'Pokračujte zde, prosím.',
      header: 'Stránka není dostupná',
      message: 'Odkaz nefunguje nebo je stránka odstraněna.',
      title: 'Stránka nenalezena'
    },
    posts: {
      newPostPlaceholder: 'Co máte na mysli?',
      emptyList: 'Prázdný List'
    },
    support: {
      title: 'Stránka podpory'
    },
    validation: {
      email: `Emailová adresa není platná.`,
      password: `Heslo musí obsahovat alespoň {minLength} znaků.`,
      required: `Prosím vyplňte {prop, select,
        email {email}
        password {password}
        other {'{prop}'}
      }.`
    }
  },
  en: {
    app: {
      madeByHtml: `built w/ Este starter kit v9 from <a href="https://twitter.com/steida">steida</a>`
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
        hint: 'Hint: pass1',
        invalidPassword: 'Invalid Password chosen',
        legend: {
          login: 'Log In',
          signup: 'Sign Up'
        },
        placeholder: {
          email: 'your@email.com',
          password: 'password'
        },
        wrongPassword: 'Wrong password'
      },
      logout: {
        button: 'Logout'
      },
      signup: {
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
      hireAgent: 'Hire Agent',
      save: 'Save',
      missionAccept: 'Mission to Accept',
      confirmMission: 'Confirm Mission Accept'
    },
    command: {
      title: 'Command Center'
    },
    confirmations: {
      cancelEdit: `You have unsaved changes. Are you sure you want to cancel them?`
    },
    dashboard: {
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
      actionsHtml: `<ul class='list-of-actions'><h2>Actions</h2>
        <li class='list-of-actions pursuit'><em>pursuit - escape or pursue in the true Bond fashion</em></li>
        <li class='list-of-actions hit'><em>hit - dispose of, put to sleep, send your regards ...</em></li>
        <li class='list-of-actions close_combat'><em>close combat - wrestle or knife down the opposing party</em></li>
        <li class='list-of-actions decipher'><em>decipher - cracking the device or code in brute or refined fashion</em></li>
        <li class='list-of-actions tap'><em>tap - like as in tap the apartment</em></li>
        <li class='list-of-actions monitor'><em>monitor - keep an eye on the guy</em></li>
        <li class='list-of-actions hide'><em>hide - remain unseen, go undetected, be the ghost</em></li>
        <li class='list-of-actions infiltrate'><em>infiltrate - the group, earn their trust and betray them</em></li>
        <li class='list-of-actions puppet'><em>puppet - exploit somebody gullible enough to trust you</em></li>
        <li class='list-of-actions'><em>improv - comes in all three blends...</em></li>
        <li class='list-of-actions'><em>fail - about 1/6 of times you simply fail ...</em></li>
      </ul>
      <ul class='list-of-skills'>Agent Skills
        <li>operations - actions are pursuit, hit, close combat, each with 1/6 probability</li>
        <li>electronics - actions are decipher, tap, monitor, each with 1/6 probability</li>
        <li>stealth - actions are hide, infiltrate, puppet, each with 1/6 probability</li>
      </ul>
      <p>Each dice has 2/6 probability of improv result of appropriate skill and 1/6 probability of fail result.</p>`,
      equipmentHtml: `tbd
      to be done`,
      missionProgressHtml: `<p>In mission processing six-sided dice mechanism is used. Display of probabilities of success is paid feature.
      You go through the mission sequence by assigning agent from agents on mission to each task and then proceed with action.
      If the throw is not successfull you may try again after sacrificing one of dies, which of course lowers your chances, to the
      point where you have no chance of succeeding.
      Desirable result is of course fulfillment of all tasks, in which case is mission successfull.
      Certain agent's equipments have different effects on the flow of mission, but to that later.</p>
      <hr />
      <ul class='mission-progress'><h2>Mission progress</h2>
        <li class='mission-progress'><em>drag&drop to equip your agents for the mission in armory </em></li>
        <li class='mission-progress'><em>Hit mission card to select it in briefing</em></li>
        <li class='mission-progress'><em>After selecting mission assign the agents by drag&drop to it</em></li>
        <li class='mission-progress'><em>Task completion is check againt agent's actions, actions depend on skill and luck</em></li>
        <li class='mission-progress'><em>Down on your luck? Try clicking the equipment, maybe it'll do something.</em></li>
        <li class='mission-progress'><em>Trashing your dice will enable rolling again.</em></li>
        <li class='mission-progress'><em>DCP will save your ass, if things don't go as planned.</em></li>
        <li class='mission-progress'><em>The only equipment hard to understand is WPAS, others should be piece of cake.</em></li>
        <li class='mission-progress'><em>Initializing escape sequence will get you out of mission mode, but mission is fail.</em></li>
        <li class='mission-progress'><em>MissionSuccess? Congrats, pick up your price and do another!</em></li>
      </ul>
      `,
      overviewHtml: `<p>
        Does a man choose his profession, or does profession choose a man? I chose not to be a - what? - Being a villain?
        Villain might be too of a strong word, let's say I am not the one to be bound by conventions about what is good and evil,
        and that I do things my way.
      </p>
      <p>
        People like to have order. Give them order and you have their vote in the elections.
        Then have the police and special forces to do this task given by public.
        Does that mean that order is automatically good? Of course it does, for most.
      </p>
      <p>
        My organization is not so narrow-minded. Do you need money real fast?
        Or to get rid of that pesky competitor, bringing in that new piece to your prized collection?
        To protect or to silence key witness?
        We do that.
        Turn to us, to professionals. We get things done.
      </p>
      <p>
        As always, this lifestyle does have its price. I can't turn up at the Social Security Office
        and start asking for aliments. What have you been doing so far? Oh, I was a head of secret
        organization doing this here and that over there - Al Pacino style, fully visualizing it right now ...
      </p>`,
      segmentsHtml: `<p>In GreyZone Player is a head of illegal organization, which provides all kinds of - services, that are usually
      reserved for state organizations, but not being a mafia, though occasionally cooperating w/ police and mafias alike.
      If you watch BlackList show - you pretty much have the idea.</p>
      <hr />
      <ul>
        <h2>Game segments</h2>
        <li class='game-segments'>Command - overview of world with country stats for organization</li>
        <li class='game-segments'>Dashboard - not being to fancy, gives you basic overview of current state of things</li>
        <li class='game-segments'>Armory - you can equip your agents here for the mission, as well as check counts.</li>
        <li class='game-segments'>Briefing - you can deploy your agents on the mission here and view current missions</li>
        <li class='game-segments'>Mission - the main deal of game magic happens here, your success is made or lost</li>
      </ul>`,
      terminologyHtml: `<p>Player directs his organization in tactical and strategical sense
      by managing its resources and staying hidden from official probing, while upholding respectable reputation.
      To fullfill this objective player assings his agents to missions who carry out his orders.
      </p>
      <hr />
      <ul class='terminology'><h2>Terminology</h2>
        <li class='terminology'><em>Reputation - good or bad, used to measure the *quality* of your - service.</em></li>
        <li class='terminology'><em>Obscurity - the nature of your enterprise requires you to be unnoticed by traditional security forces and to avoid them.</em></li>
        <li class='terminology'><em>Mise - consists of tasks, which constists of agent action requirements. Rewards are given if successfully carried out, else losses are booked.</em></li>
        <li class='terminology'><em>Agent - professional or amateur, the guy who does heavy lifting, risking his neck in the action</em></li>
        <li class='terminology'><em>Cash - dollar or ruble, yuan or peseta cash provides you with necessary liquidity.</em></li>
        <li class='terminology'><em>Contacts - having the links to people in right places is vital, for your operation.</em></li>
      </ul>`,
      title: 'HelpPage'
    },
    menu: {
      armory: 'Armory',
      briefing: 'Briefing',
      command: 'Command',
      dashboard: 'Dashboard',
      headerHtml: `<a href="https://github.com/steida/este">Este.js</a> App`,
      help: 'Help',
      login: 'Login',
      mission: 'Mission',
      signup: 'Sign Up'
    },
    mission: {
      title: 'Mission',
      buttons: {
        dcp: 'Control Damage',
        escapesequence: 'Initiate Escape Sequence',
        end: 'Finish Mission',
        success: 'Mission Accomplished!'
      }
    },
    notFound: {
      continueMessage: 'Continue here please.',
      header: 'This page isn\'t available',
      message: 'The link may be broken, or the page may have been removed.',
      title: 'Page Not Found'
    },
    posts: {
      newPostPlaceholder: 'What is on your mind?',
      emptyList: 'Empty List'
    },
    support: {
      title: 'SupportPage'
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
  }
};
