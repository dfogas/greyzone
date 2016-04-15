const CZECH = {
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
      hint: '',
      invalidPassword: 'Zvoleno neplatné heslo',
      legend: {
        login: 'Zalogovat se',
        signup: 'Vytvořit účet'
      },
      placeholder: {
        email: 'vas@email.cz',
        organization: 'např. MI5',
        password: 'heslo'
      },
      wrongPassword: 'Špatné heslo'
    },
    logout: {
      button: 'Odlogovat se'
    },
    lprecover: {
      title: 'Zapomenuté heslo'
    },
    reauthentication: {
      title: 'Ověření registrace'
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
    hireAgent: 'Prohlédnout kandidáta',
    missionAccept: 'Požádat o misi',
    save: 'Uložit'
  },
  command: {
    title: 'Velitelství'
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
    actionsHtml: `
      <ul class='list-of-actions'>
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
        <li class='list-of-actions improvAll'><em>improv - někdy je třeba umět improvizovat</em></li>
        <li class='list-of-actions failAll'><em>fail - jednoduše se to nepovedlo</em></li>
      </ul>
      <ul class='list-of-skills'><h3>Dovednosti agentů</h3>
        <li class='agent-skills operations'>
          operations - akce jsou pursuit, hit, close combat, každá s 1/6 pravděpodobnosti
        </li>
        <li class='agent-skills electronics'>
          electronics - akce jsou decipher, tap, monitor, každá s 1/6 pravděpodobností
        </li>
        <li class='agent-skills stealth'>
          stealth - akce jsou hide, infiltrate, puppet, každá s 1/6 pravděpodobností
        </li>
      </ul>
      <p>Každá kostka má 2/6 pravděpodobnost, že na ni padne improvizace příslušné dovednosti a 1/6 pravděpodobnost neúspěchu.</p>
    `,
    equipmentsHtml: `<h2>Seznam vybavení na misi pro agenty</h2>
      <ul>
        <ul class='equipment-tier operations'>
          <li class='agent-equipment HiredGun'>Nájemná puška - +1 kostka operations</li>
          <li class='agent-equipment HeavyArms'>Těžké zbraně - 1 libovolná akce operations (ne improv)</li>
          <li class='agent-equipment ProtectiveGear'>Ochranné oblečení - opakování hodu všemi kostkami</li>
        </ul>
        <ul class='equipment-tier electronics'>
          <li class='agent-equipment HandyKit'>Příruční balíček - +1 kostka electronics</li>
          <li class='agent-equipment CustomTools'>Upravené nástroje - 1 libovolná akce electronics (ne improv)</li>
          <li class='agent-equipment WPAS'>SASB - schování jednnoho výsledku na další hod</li>
        </ul>
        <ul>
          <li class='agent-equipment FakePassports'>Falešné doklady - +1 kostka stealth</li>
          <li class='agent-equipment DrugsControl'>Útočné drogy - 1 libovolná akce stealth (ne improv)</li>
          <li class='agent-equipment DCP'>ÚP - alternativní ukončení mise, ztrať pouze reputaci</li>
        </ul>
      </ul>
    `,
    missionProgressHtml: `
      <p>
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
        <li class='mission-progress'><em>Agent drag&drop na vyhrazené misto v misi.</em></li>
        <li class='mission-progress'><em>Použití vybavení zvýší šance.</em></li>
        <li class='mission-progress'><em>Splnění úkolu - akce úkolu odpovídají výsledku agentova hodu.</em></li>
        <li class='mission-progress'><em>Drag&Drop kostky na ikonu pod hodem kostku zničí a dá vám nový hod.</em></li>
        <li class='mission-progress'><em>Začít únikovou sekvenci - mise je neúspěšná, postihy za nesplnění.</em></li>
        <li class='mission-progress'><em>Mise Splněna? Blahopřejeme, odměny byly automaticky připsány na váš účet.</em></li>
      </ul>
    `,
    segmentsHtml: `
      <p>
        Ve Ghost Struggle je hráč hlavou ilegální organizace, která
        nabízí různé druhy - služeb, takových, jaké jsou obvykle vyhrazeny pro státní organizace.
        Oficiální či neoficiální organizace násilí jako jsou státy a mafie jsou jeho - partnery.
        TV show BlackList je dobrým přirovnáním, pokud ji sledujete.
      </p>
      <hr />
      <ul>
        <h2>Game segments</h2>
        <li class='game-segments'>Velitelství - přehled o herní statistice organizace v herním světě</li>
        <li class='game-segments'>Nástěnka - pro základní přehled o stavu organizace</li>
        <li class='game-segments'>Zbrojnice - umožňuje vybavit agenty pro zlepšení jejich šancí.</li>
        <li class='game-segments'>Briefing - zde je možné nasadit agenty na misi a prohlédnout si aktuální mise</li>
        <li class='game-segments'>Mission - zde je hlavní kouzlo hry. Rozhoduje se tu o vašem úspěchu či neúspěchu.</li>
      </ul>
    `,
    terminologyHtml: `
      <p>
        Hráč řídí organizaci po taktické i strategické stránce - řídí zdroje,
        zůstává schován před oficiálními místy, a stará se o udržování kontaktů
        a profesionální reputace organizace.
      </p>
      <p>
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
      </ul>
    `,
    title: 'Stránka nápovědy'
  },
  introduction: {
    overviewHtml: `
      <h2>O hře</h2><em><p>
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
      </p></em>
    `,
    title: `Ghost Struggle`
  },
  login: {
    message: `<p>Pokud jste na této stránce poprvé, klikněte na tlačítko vytvořit účet.</p>
      <p>V opačném případě se zalogujte s emailem a heslem, které jste uvedli při vytvoření účtu.</p>`
  },
  menu: {
    armory: 'Zbrojnice',
    briefing: 'Příprava',
    command: 'Velitelství',
    countries: 'Země',
    dashboard: 'Nástěnka',
    headerHtml: `<a href="https://github.com/steida/este">Este.js</a> App`,
    help: 'Nápověda',
    login: 'Log',
    mission: 'Mise',
    introduction: 'O hře',
    signup: 'Vytvoření účtu',
    forum: 'Fórum'
  },
  mission: {
    title: 'Mise',
    buttons: {
      backtomission: 'Zpátky',
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
    newPostPlaceholder: 'Co vás právě napadlo?',
    emptyList: 'Prázdný List'
  },
  signup: {
    message: `
      <p>Zde vytvoříte účet se jménem své organizace, to již během hry nepůjde měnit.
        Po zaregistrování bude na uvedený email zaslán aktivační link. Po jeho
        potvrzení se můžete zalogovat a začít kout pikle.</p>
    `
  },
  support: {
    title: 'Stránka podpory'
  },
  tutorial: {
    agentinarmory: `Zde můžete dát agentovi vybavení.`,
    agentonmission: `Přetáhněte agenta sem a mise může začít.`,
    equipmentslot: `Přetáhněte ikonu vybavení zde.`
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
};

export default CZECH;
