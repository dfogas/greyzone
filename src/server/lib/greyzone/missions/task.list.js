/*eslint camelcase: 0 */
import {decipher, monitor, tap, puppet, infiltrate, hide, hit, close_combat, pursuit} from './actions'; //

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
  close_quarters: [close_combat, close_combat],
  underground_fight: [close_combat, hide],
  pain_and_lead: [close_combat, hit],
  street_school: [close_combat, infiltrate],
  security_disarmement: [close_combat, tap],
  rewriting_the_code: [decipher, decipher],
  hack: [decipher, hide],
  sprint_time: [decipher, hit],
  unclear_signal: [decipher, monitor],
  man_and_machine: [decipher, puppet],
  man_in_the_middle: [decipher, tap],
  escape: [hide, hide],
  silent_kill: [hide, hit],
  silent_partner: [hide, infiltrate],
  where_is_puppeteer: [hide, puppet],
  secret_pursuit: [hide, pursuit],
  shootout: [hit, hit],
  change_of_leadership: [hit, puppet],
  undercover: [infiltrate, infiltrate],
  make_betray: [infiltrate, puppet],
  big_brother: [monitor, monitor],
  hotline: [monitor, puppet],
  rigging_cameras: [monitor, tap],
  puppeteer: [puppet, puppet],
  white_horse: [puppet, tap],
  cracks_and_wires: [tap, tap],
  through_hard_earned_trust: [close_combat, hide, infiltrate],
  rough_day: [close_combat, hit, hit],
  fighting_to_prove_yourself: [close_combat, close_combat, infiltrate],
  full_control: [decipher, monitor, tap],
  social_mastery: [infiltrate, puppet, puppet],
  truman_show: [monitor, monitor, tap],
  perfect_setup: [monitor, puppet, tap],
  loops_within_loops: [puppet, puppet, tap]
};

export default tasks;
