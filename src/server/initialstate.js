import messages from '../client/messages';

const initialLocale = 'en';

export default {
  // Each key represents one app feature/store.
  auth: {
    data: null,
    form: null,
    lprecover: {message: ''},
    reauthentication: {message: ''}
  },
  i18n: {
    formats: {},
    locales: initialLocale,
    messages: messages[initialLocale]
  },
  posts: {
    newPost: {
      text: ''
    },
    list: [
    ]
  },
  pendingActions: {},
  users: {
    // User can be authenticated on server, and then viewer must be defined.
    viewer: null
  }
};
