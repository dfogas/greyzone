/* [Equipments] Number -> [EquipmentsWithQuantity]
  for playerdefaults equipments generation */

function playerEquipments(equipmentsList, number) {
  var el = equipmentsList;
  for (var i = 0; i < equipmentsList.length; i += 1)
    el[i].quantity = number;

  return el;
}

export default playerEquipments;
