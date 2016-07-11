/* ImmutableMap(Equipment) -> String(PathToSound) */

import {msg} from '../intl/store';

function getEquipmentSound(equipment) {
  if (equipment.get('name') === msg('equipments.operations.0.name'))
    return '/assets/audio/gun_cocking.ogg';
  if (equipment.get('name') === msg('equipments.operations.1.name'))
    return '/assets/audio/heavy_launch.ogg';
  if (equipment.get('name') === msg('equipments.operations.2.name'))
    return '/assets/audio/heart_beat.ogg';
  if (equipment.get('name') === msg('equipments.electronics.1.name'))
    return '/assets/audio/airwrench.ogg';
  if (equipment.get('name') === msg('equipments.electronics.2.name'))
    return '/assets/audio/electronic_buzz.ogg';
  if (equipment.get('name') === msg('equipments.stealth.0.name'))
    return '/assets/audio/page_turn.ogg';
  if (equipment.get('name') === msg('equipments.stealth.1.name'))
    return '/assets/audio/pills_bottle.ogg';
  if (equipment.get('name') === msg('equipments.stealth.2.name'))
    return '/assets/audio/briefcase.ogg';
  else
    return '/assets/audio/default.ogg';
}

export default getEquipmentSound;