/* ImmutableMap(jsonapi) or null -> Boolean
  checking whether agent is on display, with null safe check
*/



const selfIsDisplayed = function(jsonapi) {
  // TODO: write agent validation function to use here, ?Maybe
  if (!jsonapi.get('self'))
    return false;
  else
    return jsonapi.getIn(['dashboard', 'agentondisplay', 'id']) === self.get('id');
};

export default selfIsDisplayed;
