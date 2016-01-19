function generateEquipments(slots) {
  let equipments = [];
  while (slots) {
    equipments.push({name: ''});
    slots -= 1;
  }
  return equipments;
}

export default generateEquipments;
