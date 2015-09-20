import Component from '../components/component.react.js';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class MainScreen extends Component {
  render() {
    const isLoggedIn = !!this.props.viewer;
    console.log(this.props.viewer);

    return (
      <div className='main-screen'>
        <h1>MIA</h1>
        {!isLoggedIn &&
          <Link to='login'><input type='button' value={msg('auth.form.legend.login')} /></Link>}
        <p>
          Vybírá si muž své povolání, nebo si povolání vybírá jeho? Na každý pád,
          já si nezvolil - co? - Být padouch? - Padouch je možná příliš silné slovo,
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
        </p>
        <ul>
          <h2>Game segments</h2>
          <li className='game-segments'>Intro - you are reading it</li>
          <li className='game-segments'>Dashboard - not being to fancy, gives you basic overview of current state of things</li>
          <li className='game-segments'>Armory - you can equip your agents here for the mission, as well as check counts.</li>
          <li className='game-segments'>Briefing - you can deploy your agents on the mission here and view current missions</li>
          <li className='game-segments'>Countries - countries overview</li>
          <li className='game-segments'>Contest - compare how you fare against other players</li>
          <li className='game-segments'>Mission - the main deal of game magic happens here, your success is made or lost</li>
        </ul>

        <ul className='terminology'><h2>Terminology</h2>
          <li className='terminology'><em>Reputation - good or bad, used to measure the *quality* of your - service.</em></li>
          <li className='terminology'><em>Obscurity - the nature of your enterprise requires you to be unnoticed by traditional security forces and to avoid them.</em></li>
          <li className='terminology'><em>Mise - průběh plnění zadání na jehož konci v případě úspěchu obdrží hráč odměnu, či utrpí ztrátu.</em></li>
          <li className='terminology'><em>Agent - dobrý či špatný, jouda, který nese svou kůži na trh, a oddře těžkou práci, je na to trénovaný.</em></li>
          <li className='terminology'><em>Cash - dollar or ruble, yuan or peseta cash provides you with necessary liquidity.</em></li>
          <li className='terminology'><em>Contacts - having the links to people in right places, be it police or goverment spec units, is vital for your operation.</em></li>
        </ul>

        <ul className='mission-progress'><h2>Mission progress</h2>
          <li className='mission-progress'><em>Give your guys some fancy toys for their game in armory</em></li>
          <li className='mission-progress'><em>Hit mission title to focus it on briefing</em></li>
          <li className='mission-progress'><em>Did your selection? Send in the cats(agents)!</em></li>
          <li className='mission-progress'><em>Task completion is check againt agent's actions, actions depend on skill and luck</em></li>
          <li className='mission-progress'><em>Down on your luck? Try clicking the equipment, maybe it'll do something.</em></li>
          <li className='mission-progress'><em>Trashing your dice will enable rolling again.</em></li>
          <li className='mission-progress'><em>DCP will save your ass, if things don't go as planned.</em></li>
          <li className='mission-progress'><em>The only equipment hard to understand is WPAS, others should be piece of cake.</em></li>
          <li className='mission-progress'><em>Initializing escape sequence will get you out of mission mode, but mission is fail.</em></li>
          <li className='mission-progress'><em>MissionSuccess? Congrats, pick up your price and do another!</em></li>
        </ul>

        <ul className='list-of-actions'><h2>Actions</h2>
          <li className='list-of-actions'><em>pursuit - escape or pursue in the true Bond fashion</em></li>
          <li className='list-of-actions'><em>hit - dispose of, put to sleep, send your regards ...</em></li>
          <li className='list-of-actions'><em>close combat - wrestle or knife down the opposing party</em></li>
          <li className='list-of-actions'><em>decipher - cracking the device or code in brute or refined fashion</em></li>
          <li className='list-of-actions'><em>tap - like as in tap the apartment</em></li>
          <li className='list-of-actions'><em>monitor - keep an eye on the guy</em></li>
          <li className='list-of-actions'><em>hide - remain unseen, go undetected, be the ghost</em></li>
          <li className='list-of-actions'><em>infiltrate - the group, earn their trust and betray them</em></li>
          <li className='list-of-actions'><em>puppet - exploit somebody gullible enough to trust you</em></li>
          <li className='list-of-actions'><em>improv - comes in all three blends...</em></li>
          <li className='list-of-actions'><em>fail - about 1/6 of times you simply fail ...</em></li>
        </ul>

        <p>
          <h3><em>Disturbed? - Afraid? - Intrigued perhaps?</em></h3>
        </p>
        <Link to='signup'><input type='button' value={msg('auth.form.legend.signup')} /></Link>
      </div>
    );
  }
}

MainScreen.propTypes = {
  viewer: React.PropTypes.object
};

export default MainScreen;
