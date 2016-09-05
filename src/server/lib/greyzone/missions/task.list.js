/*eslint camelcase: 0 */
import {decipher, monitor, tap, puppet, infiltrate, hide, hit, close_combat, pursuit} from './actions';

/*
  pravidla ...
  mělo by být asi 90 tasků každý s každým včetně sebe
  použití tak, že vyhledám akce bez
  konvence
  akce řazeny alfabeticky
*/
const tasks = {
  pure_improvization: [],
  eavesdropping: [tap],
  understand: [decipher],
  watch: [monitor],
  pursuit: [pursuit],
  shoot: [hit],
  brawl: [close_combat],
  disappear: [hide],
  infiltrate: [infiltrate],
  manipulate: [puppet],
  rewriting_the_code: [decipher, decipher],
  escape: [hide, hide],
  shootout: [hit, hit],
  big_brother: [monitor, monitor],
  puppeteer: [puppet, puppet],
  cracks_and_wires: [tap, tap],
  underground_fight: [close_combat, hide],
  pain_and_lead: [close_combat, hit],
  man_and_machine: [decipher, puppet],
  hack: [decipher, hide],
  silent_kill: [hide, hit],
  silent_partner: [hide, infiltrate],
  make_betray: [infiltrate, puppet],
  secret_pursuit: [hide, pursuit],
  hotline: [monitor, puppet],
  rigging_cameras: [monitor, tap],
  bomb_mule: [puppet, tap],
  loops_within_loops: [puppet, puppet, tap]
};

export default tasks;
