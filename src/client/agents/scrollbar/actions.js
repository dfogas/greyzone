import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';

export function normalizeScrollbarLeft(context) {
  dispatch(normalizeScrollbarLeft, {context});
}

export function scrollLeft(context) {
  const agentscrollbar = jsonapiCursor(['components', 'agentscrollbar', context, 'left']) || 0;
  const shift = 264; //

  if (agentscrollbar + shift < 6)
    dispatch(scrollLeft, {context, agentscrollbar});
  else normalizeScrollbarLeft(context);

}

export function scrollRight(context) {
  const agentscrollbar = jsonapiCursor(['components', 'agentscrollbar', context, 'left']) || 0;
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const agents = jsonapiCursor(['agents']);

  if (context === 'armory' && agentscrollbar > -((agents.size - 3)) * 264)
    dispatch(scrollRight, {context, agentscrollbar});

  else if (context === 'briefing' && agentscrollbar > -((agents.size - 3) * 264))
    dispatch(scrollRight, {context, agentscrollbar});

  else if (context === 'mission' && agentscrollbar > -((agentsonmission.size - 1) * 264))
    dispatch(scrollRight, {context, agentscrollbar});
}

export function slideLeft(context) {
  const agentscrollbar = isNaN(jsonapiCursor(['components', 'agentscrollbar', context, 'left'])) ? 0 : (jsonapiCursor(['components', 'agentscrollbar', context, 'left']) || 0);
  const agentCardWidth = 264;
  const shift = 8;
  var totalShift = 0;
  var slider;

  if (context === 'armory' && agentscrollbar <= 0)
    slider = setInterval(function() {totalShift += shift; dispatch(slideLeft, {context, agentscrollbar, shift}); if (totalShift >= agentCardWidth) clearInterval(slider); }, 30);

  else if (context === 'briefing' && agentscrollbar <= 0)
    slider = setInterval(function() {totalShift += shift; dispatch(slideLeft, {context, agentscrollbar, shift}); if (totalShift >= agentCardWidth) clearInterval(slider); }, 30);

  else if (context === 'mission' && agentscrollbar <= 0)
    slider = setInterval(function() {totalShift += shift; dispatch(slideLeft, {context, agentscrollbar, shift}); if (totalShift >= agentCardWidth) clearInterval(slider); }, 30);
}

export function slideRight(context) {
  const agentscrollbar = isNaN(jsonapiCursor(['components', 'agentscrollbar', context, 'left'])) ? 0 : (jsonapiCursor(['components', 'agentscrollbar', context, 'left']) || 0);
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const agents = jsonapiCursor(['agents']);
  const agentCardWidth = 264;
  const shift = 8;
  var totalShift = 0;
  var slider;

  if (context === 'armory' && agentscrollbar > -((agents.size - 3)) * 265)
    slider = setInterval(function() {totalShift += shift; dispatch(slideRight, {context, agentscrollbar, shift}); if (totalShift >= agentCardWidth) clearInterval(slider); }, 30);

  else if (context === 'briefing' && agentscrollbar > -((agents.size - 3) * 265))
    slider = setInterval(function() {totalShift += shift; dispatch(slideRight, {context, agentscrollbar, shift}); if (totalShift >= agentCardWidth) clearInterval(slider); }, 30);

  else if (context === 'mission' && agentscrollbar > -((agentsonmission.size - 1) * 265))
    slider = setInterval(function() {totalShift += shift; dispatch(slideRight, {context, agentscrollbar, shift}); if (totalShift >= agentCardWidth) clearInterval(slider); }, 30);
}

setToString('scrollbar', {
  normalizeScrollbarLeft,
  scrollLeft,
  scrollRight,
  slideLeft,
  slideRight
});
