/* ImmutableList(enhancements) ImmutableMap(toy) -> Boolean
  checks made by name, so imperative is do not change names
  TODO: make dependable on game
  TODO: check whether can be merged with equipment enhancement
  BML: true
*/

function toyIsAvailable(enhancements, equipment) {
  const enhancementnames = enhancements.map(enh => enh.get('name'));
  return (equipment.get('name') === 'Hired Gun' && enhancementnames.indexOf('Locals') !== -1 ||
  equipment.get('name') === 'Heavy Arms' && enhancementnames.indexOf('Arms Dealer') !== -1 ||
  equipment.get('name') === 'Protective Gear' && enhancementnames.indexOf('Stork Ind.') !== -1 ||
  equipment.get('name') === 'Handy Kit' && enhancementnames.indexOf('Workshop') !== -1 ||
  equipment.get('name') === 'Custom Tools' && enhancementnames.indexOf('Laboratory') !== -1 ||
  equipment.get('name') === 'WPAS' && enhancementnames.indexOf('Army Level Crypto') !== -1 ||
  equipment.get('name') === 'Fake Passports' && enhancementnames.indexOf('Forger') !== -1 ||
  equipment.get('name') === 'Drugs Control' && enhancementnames.indexOf('Pharmacy') !== -1 ||
  equipment.get('name') === 'DCP' && enhancementnames.indexOf('Cleaning Service') !== -1);
}

export default toyIsAvailable;
