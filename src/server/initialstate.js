import messages from '../client/messages'; //

const initialLocale = 'en';

export default {
  // Each key represents one app feature/store.
  about: {
    group: `introduction`,
    item: `introduction`
  },
  auth: {
    data: null,
    feedbackform: {
      stars: {
        mechanics: 0,
        aesthetics: 0,
        interface: 0,
        theme: 0,
        difficulty: 0,
        overall: 0
      }
    },
    form: null,
    lprecover: {message: ``},
    reauthentication: {message: ``}
  },
  i18n: {
    formats: {},
    locales: initialLocale,
    messages: messages[initialLocale]
  },
  posts: {
    newPost: {
      text: ``
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
