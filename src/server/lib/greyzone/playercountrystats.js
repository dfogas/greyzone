/* [Country] Number -> [CountryPlayer] //
  for playerdefaults equipments generation */

// import randomInt from '../../../client/lib/general/getrandomint';

function playerCountryStats(countrylist, reputation, obscurity) {
  var cl = countrylist;
  for (var i = 0; i < countrylist.length; i += 1) {
    cl[i].reputation = reputation;
    if (obscurity <= 1)
      cl[i].obscurity = obscurity;
    else
      cl[i].obscurity = obscurity - 1 * Math.random() / 2;
  }

  return cl;
}

export default playerCountryStats;
