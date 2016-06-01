/*
  Default Missions List
*/
import ConnectionsMap from './missions/default/connections.map';
import DemonstrationOfPower from './missions/default/demonstration.of.power';
import Desinformation from './missions/default/desinformation';
import MoneyChannelling from './missions/default/money.channelling';
import ReverseEngineering from './missions/default/poker.table';
import LayingLow from './missions/default/laying.low';
import AgentInTrouble from './missions/default/agent.in.trouble';
import Discovered from './missions/multiplayer/discovered.mission';

const MissionsList = []
  .concat(ConnectionsMap)
  .concat(DemonstrationOfPower)
  .concat(Desinformation)
  .concat(MoneyChannelling)
  .concat(ReverseEngineering)
  .concat(LayingLow)
  .concat(AgentInTrouble)
  .concat(Discovered);

export default MissionsList;
