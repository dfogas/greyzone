/* [Country] Number -> [CountryPlayer]
  for playerdefaults equipments generation */

function playerCountryStats(countrylist, reputation, obscurity) {
  var cl = countrylist;
  for (var i = 0; i < countrylist.length; i += 1) {
    cl[i].reputation = reputation;
    cl[i].obscurity = obscurity;
  }

  return cl;
}

export default playerCountryStats;
