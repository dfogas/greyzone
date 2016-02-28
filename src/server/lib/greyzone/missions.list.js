/*
  Default Missions List
*/
import ConnectionsMap from './missions/default/connections.map';
import DemonstrationOfPower from './missions/default/demonstration.of.power';
import Desinformation from './missions/default/desinformation';
import MoneyChannelling from './missions/default/money.channelling';
import ReverseEngineering from './missions/default/reverse.engineering';
import SetupOperation from './missions/default/setup.operation';

const MissionsList = [].concat(ConnectionsMap).concat(DemonstrationOfPower).concat(Desinformation).concat(MoneyChannelling).concat(ReverseEngineering).concat(SetupOperation);

export default MissionsList;
