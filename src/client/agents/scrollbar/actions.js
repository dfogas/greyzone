import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';

export function normalizeScrollbarLeft(context) {
  dispatch(normalizeScrollbarLeft, {context});
}

export function scrollLeft(context) {
  const agentscrollbar = jsonapiCursor(['components', 'agentscrollbar', context, 'left']) || 0;
  const shift = 264;

  if (agentscrollbar + shift < 6)
    dispatch(scrollLeft, {context, agentscrollbar});
  else normalizeScrollbarLeft(context);

}

export function scrollRight(context) {
  const agentscrollbar = jsonapiCursor(['components', 'agentscrollbar', context, 'left']) || 0;
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const availableAgents = jsonapiCursor(['agents']).filter(agent => !agent.get('prison')).filter(agent => !agent.get('KIA')).filter(agent => agent !== null);
  //
  if (context === 'armory' && agentscrollbar > -((availableAgents.size - 3)) * 264)
    dispatch(scrollRight, {context, agentscrollbar});

  else if (context === 'briefing' && agentscrollbar > -((availableAgents.size - 3) * 264))
    dispatch(scrollRight, {context, agentscrollbar});

  else if (context === 'mission' && agentscrollbar > -((agentsonmission.size - 1) * 264))
    dispatch(scrollRight, {context, agentscrollbar});
}

setToString('scrollbar', {
  normalizeScrollbarLeft,
  scrollLeft,
  scrollRight
});
