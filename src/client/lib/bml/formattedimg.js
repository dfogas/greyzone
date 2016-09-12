/* Bool Bool Immutable.Map(agent) -> String */
import prop from '../general/r.i.prop';

const formattedImg = function(isLoyal, isShowcased, agent) {
  if (!agent)
    return '';

  let formattedImg = (isShowcased && isLoyal)
    ? prop('imgsrc', agent).replace('_128', 'L_sc')
    : isShowcased
    ? prop('imgsrc', agent).replace('_128', '_sc')
    : isLoyal
    ? prop('imgsrc', agent).replace('_128', 'L_128')
    : prop('imgsrc', agent);

  return formattedImg;
};

export default formattedImg;
