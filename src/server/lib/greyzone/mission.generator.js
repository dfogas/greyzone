/*
  this is part of the effort to fulfill one origin principle in greyzone
*/
import CountryList from './country.list';
import MissionsList from './missions.list';
import randomint from '../../../client/lib/getrandomint';

function Mission(title, tier, ETA) {
  let mission;
  mission = MissionsList.filter(mission => mission.title === title && mission.tier === tier)[0];
  mission.ETA = Date.now() + ETA;
  mission.inCountry = CountryList[randomint(0, CountryList.length - 1)].name;
  return mission;
}

export default Mission;
