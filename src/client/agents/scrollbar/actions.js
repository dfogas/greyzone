import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';

export function scrollLeft(context) {
  const jsonapi = jsonapiCursor();
  const agentscrollbarbriefing = jsonapiCursor(['components', 'agentscrollbar', 'briefing', 'left']);
  const agentscrollbarmission = jsonapiCursor(['components', 'agentscrollbar', 'mission', 'left']);
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const agents = jsonapiCursor(['agents']);

  if (context === 'briefing' && agentscrollbarbriefing < 0)
    dispatch(scrollLeft, {context});

  if (context === 'mission' && agentscrollbarmission < 0)
    dispatch(scrollLeft, {context});
}

export function scrollRight(context) {
  const jsonapi = jsonapiCursor();
  const agentscrollbarbriefing = jsonapiCursor(['components', 'agentscrollbar', 'briefing', 'left']);
  const agentscrollbarmission = jsonapiCursor(['components', 'agentscrollbar', 'mission', 'left']);
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const agents = jsonapiCursor(['agents']);

  if (context === 'briefing' && agentscrollbarbriefing > -((agents.size - 3) * 265)) {
    console.log('Agents: ' + (-(agents.size - 3 * 265)));
    console.log('Scrollbar left: ' + agentscrollbarbriefing);
    dispatch(scrollRight, {context});
  }
  if (context === 'mission' && agentscrollbarmission > -((agentsonmission.size - 1) * 265)) {
    console.log('Agents on mission: ' + (-(agentsonmission.size * 265)));
    console.log('Scrollbar left: ' + agentscrollbarmission);
    dispatch(scrollRight, {context});
  }
  // if (missionstarted)
  //   dispatch(scrollRight, {});
  // if (agentsbstyle > -((agentscount - 3) * 265))
  //   dispatch(scrollRight, {context});

}

setToString('scrollbar', {
  scrollLeft,
  scrollRight
});
