/*
  used by agent.generator
  it makes equipment array from given number
  Number -> Array
*/

function generateEquipments(slots) {
  let equipments = [];
  while (slots) {
    equipments.push({name: ''});
    slots -= 1;
  }
  return equipments;
}

export default generateEquipments;
