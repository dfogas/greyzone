/* ImmutableList(task) ImmutableMap(game) -> String */

const taskName = function(task, game) {
  const helperindex = game.getIn(['globals', 'tasks']).valueSeq().indexOf(task.filter(action => action.get('name') !== 'improv').sortBy(action => action.get('name')));
  if (helperindex !== -1)
    return game.getIn(['globals', 'tasks']).keySeq().get(helperindex);
  else
    return 'taskname not specified';
};

export default taskName;
