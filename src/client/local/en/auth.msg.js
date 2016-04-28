const authMsg = {
  form: {
    button: {
      login: 'Login',
      signup: 'Sign up'
    },
    hint: '',
    invalidPassword: 'Invalid Password chosen',
    legend: {
      login: 'Log In',
      signup: 'Sign Up'
    },
    placeholder: {
      email: 'your@email.com',
      organization: 'Organization e.g. Spectre',
      password: 'password'
    },
    wrongPassword: 'Wrong password'
  },
  logout: {
    button: 'Logout'
  },
  lprecover: {
    title: 'Recover Lost Password',
    placeholder: 'Email',
    message: 'Fill in email for which you want to recover password',
    legend: 'Password Recover',
    button: 'Send'
  },
  reauthentication: {
    title: 'Revalidating signup',
    placeholder: {
      email: 'Email',
      password: 'New password'
    },
    legend: 'Set Up New Password',
    button: 'Confirm'
  },
  signup: {
    button: 'Back To Login',
    complete: 'Signup completed',
    title: 'Sign Up'
  },
  title: 'Login'
};

export default authMsg;
