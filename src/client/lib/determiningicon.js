/*
  String -> UnicodeChar or String
*/

export default function determiningIcon(resultkey) {
  if (resultkey === 'reputation')
    return '\u{1f3c6}';
  if (resultkey === 'gameCash')
    return '\u{1f4b0}';
  if (resultkey === 'gameContacts')
    return '\u{1f575}';
  if (resultkey === 'obscurity')
    return '\u{1f441}';
  if (resultkey === 'agentKilled')
    return '\u{1f480}';
  if (resultkey === 'character')
    return '\u{1f481}';
  if (resultkey === 'agentLoyal')
    return '\u{1f531}';
  if (resultkey === 'agentFreed')
    return 'Agent freed';
  if (resultkey === 'agentRecruited')
    return 'Agent recruited';
  else
    return '\u{1f631}';
}
