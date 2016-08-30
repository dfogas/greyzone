/* Bool Bool Immutable.Map(agent) -> String */

const formattedImg = function(isLoyal, isShowcased, agent) {
  let formattedImg = (isShowcased && isLoyal)
    ? agent.get('imgsrc').replace('_128', 'L_sc')
    : isShowcased
    ? agent.get('imgsrc').replace('_128', '_sc')
    : isLoyal
    ? agent.get('imgsrc').replace('_128', 'L_128')
    : agent.get('imgsrc');

  return formattedImg;
};

export default formattedImg;
