import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';

export function scrollLeft(context) {
  const agentscrollbar = jsonapiCursor(['components', 'agentscrollbar', context, 'left']) || 0;

  if (context === 'armory' && agentscrollbar < 0)
    dispatch(scrollLeft, {context, agentscrollbar});

  if (context === 'briefing' && agentscrollbar < 0)
    dispatch(scrollLeft, {context, agentscrollbar});

  if (context === 'mission' && agentscrollbar < 0)
    dispatch(scrollLeft, {context, agentscrollbar});
}

export function scrollRight(context) {
  const agentscrollbar = jsonapiCursor(['components', 'agentscrollbar', context, 'left']) || 0;
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const agents = jsonapiCursor(['agents']);

  if (context === 'armory' && agentscrollbar > -((agents.size - 3)) * 265)
    dispatch(scrollRight, {context, agentscrollbar});

  if (context === 'briefing' && agentscrollbar > -((agents.size - 3) * 265))
    dispatch(scrollRight, {context, agentscrollbar});

  if (context === 'mission' && agentscrollbar > -((agentsonmission.size - 1) * 265))
    dispatch(scrollRight, {context, agentscrollbar});
}

setToString('scrollbar', {
  scrollLeft,
  scrollRight
});
