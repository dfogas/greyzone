/*
  this is part of the effort to fulfill one origin principle in greyzone
*/
import MissionList from './missions.list';

function Mission(title, tier, ETA) {
  let mission;
  mission = MissionList.filter(mission => mission.title === title && mission.tier === tier)[0];
  mission.ETA = Date.now() + ETA;
  return mission;
}

export default Mission;
