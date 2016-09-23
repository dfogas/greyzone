/* ImmutableMap(Agent) -> String(name of story) */
import randomInt from '../getrandomint';
import storiesList from './talk/stories.list';

const storyTalk = function(agent) {
  const storyArray = storiesList.filter(story => story.personality === agent.get('personality') && story.specialist === agent.get('specialist'));
  return storyArray[randomInt(0, storyArray.length - 1)].name;
};

export default storyTalk;
