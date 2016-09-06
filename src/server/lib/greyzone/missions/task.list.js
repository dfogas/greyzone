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
  underground_fight: [close_combat, hide],
  pain_and_lead: [close_combat, hit],
  rewriting_the_code: [decipher, decipher],
  hack: [decipher, hide],
  unclear_signal: [decipher, monitor],
  man_and_machine: [decipher, puppet],
  man_in_the_middle: [decipher, tap],
  escape: [hide, hide],
  silent_kill: [hide, hit],
  silent_partner: [hide, infiltrate],
  secret_pursuit: [hide, pursuit],
  shootout: [hit, hit],
  change_of_leadership: [hit, puppet],
  make_betray: [infiltrate, puppet],
  big_brother: [monitor, monitor],
  hotline: [monitor, puppet],
  rigging_cameras: [monitor, tap],
  puppeteer: [puppet, puppet],
  bomb_mule: [puppet, tap],
  cracks_and_wires: [tap, tap],
  rough_day: [close_combat, hit, hit],
  full_control: [decipher, monitor, tap],
  loops_within_loops: [puppet, puppet, tap]
};

export default tasks;
