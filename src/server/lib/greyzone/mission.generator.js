/*
  String Number Number Boolean -> JSObject(Mission)
  this is part of the effort to fulfill one  origin principle in greyzone
*/
import CountryList from './country.list';
import MissionsList from './missions.list';
import Discovered from './missions/gamepushed/discovered.mission';
import Noticed from './missions/gamepushed/noticed.mission';
import randomint from '../../../client/lib/getrandomint';
import uuid from '../../../client/lib/guid';

function Mission(title, tier, ETA, forcefail) {
  let mission;
  mission = MissionsList.concat(Discovered).concat(Noticed).find(mission => mission.title === title && mission.tier === tier);
  mission.ETA = Date.now() + ETA;
  mission.inCountry = CountryList[randomint(0, CountryList.length - 1)].name;
  mission.id = uuid() + 'gzm';
  if (forcefail)
    mission.forcefail = forcefail;
  return mission;
}

export default Mission;
