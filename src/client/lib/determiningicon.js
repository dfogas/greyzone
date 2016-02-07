export default function determiningIcon(resultkey) {
  if (resultkey === 'reputation')
    return '\u{1f3c6}';
  if (resultkey === 'gameCash')
    return '\u{1f4b0}';
  if (resultkey === 'gameContacts')
    return '\u{1f575}';
  if (resultkey === 'obscurity')
    return '\u{1f441}';
  else
    return '\u{1f631}';
}
