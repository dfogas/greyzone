import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';

export function scrollLeft() {
  const jsonapi = jsonapiCursor();
  const agentsbstyle = jsonapi.getIn(['componentsstates', 0, 'componentstyle', 'left']);

  if (agentsbstyle < 0)
    dispatch(scrollLeft, {});
  else
    return;

}

export function scrollRight() {
  const jsonapi = jsonapiCursor();
  const agentsbstyle = jsonapi.getIn(['componentsstates', 0, 'componentstyle', 'left']);
  const agentscount = jsonapi.get('agents').size;

  if (agentsbstyle > -((agentscount - 3) * 265))
    dispatch(scrollRight, {});
  else
    return;
}

setToString('scrollbar', {
  scrollLeft,
  scrollRight
});
