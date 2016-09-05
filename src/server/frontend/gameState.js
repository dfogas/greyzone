// TODO: write this function and figure out where, in the program flow belongs
// probably right with userState

// export default function gameState() {
//   return (req, res, next) => {
//
//   };
// }

import CountryList from '../lib/greyzone/countries/countries.list';
import EnhancementList from '../lib/greyzone/enhancements/enhancement.list';
import EquipmentList from '../lib/greyzone/equipments/equipments.list';
import EventList from '../lib/greyzone/events/events.list';
import MissionsList from '../lib/greyzone/missions.list';
import OptionsList from '../lib/greyzone/options.list';
import StatusList from '../lib/greyzone/statuses/statuses.list';
import TaskList from '../lib/greyzone/missions/task.list';
import TrainingTable from '../lib/greyzone/globals/trainingtable';

const gameState = {
  events: EventList,
  globals: {
    constants: {
      agentsPriceList: {
        '1': 100,
        '2': 550,
        '3': 1000,
        '4': 5000,
        '5': 10000,
        '6': 50000
      },
      missionsPriceList: {
        '1': {cash: 0, contacts: 3},
        '2': {cash: 10, contacts: 3},
        '3': {cash: 100, contacts: 3},
        '4': {cash: 1000, contacts: 10},
        '5': {cash: 10000, contacts: 20}
      },
      started: 1452338437180
    },
    countries: CountryList,
    enhancements: EnhancementList,
    equipments: EquipmentList,
    missions: MissionsList,
    options: OptionsList,
    features: {
      paid: {
        equipments: {
          ETAdelay: 60 * 5 * 1000
        }
      },
      unpaid: {
        equipments: {
          ETAdelay: 60 * 10 * 1000
        }
      }
    },
    statuses: StatusList,
    tasks: TaskList,
    trainingtable: TrainingTable
  }
};

export default gameState;
