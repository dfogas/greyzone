/* ImmutableMap(Equipment) ImmutableList(enhancements) -> ImmutableMap(Enhancement)
  BML: true
*/

function equipmentEnhancement(equipment, enhancements) {
  if (equipment.get('name') === 'Hired Gun')
    return enhancements.find(enh => enh.get('name') === 'Locals');
  if (equipment.get('name') === 'Heavy Arms')
    return enhancements.find(enh => enh.get('name') === 'Arms Dealer');
  if (equipment.get('name') === 'Protective Gear')
    return enhancements.find(enh => enh.get('name') === 'Stork Ind.');
  if (equipment.get('name') === 'Handy Kit')
    return enhancements.find(enh => enh.get('name') === 'Workshop');
  if (equipment.get('name') === 'Custom Tools')
    return enhancements.find(enh => enh.get('name') === 'Laboratory');
  if (equipment.get('name') === 'WPAS')
    return enhancements.find(enh => enh.get('name') === 'Army Level Crypto');
  if (equipment.get('name') === 'Fake Passports')
    return enhancements.find(enh => enh.get('name') === 'Forger');
  if (equipment.get('name') === 'Drugs Control')
    return enhancements.find(enh => enh.get('name') === 'Pharmacy');
  if (equipment.get('name') === 'DCP')
    return enhancements.find(enh => enh.get('name') === 'Cleaning Service');
}

export default equipmentEnhancement;
