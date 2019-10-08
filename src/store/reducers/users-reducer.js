export const users = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_AUTH': {
      document.cookie = `token=${action.payload.token};`;
      window.location = '/application';
      break;
    }
    case 'LOGIN_FAILED': {
      return { loginError: action.payload };
    }
    case 'CATCH_ERROR': {
      // eslint-disable-next-line no-console
      console.log('****CATCHED:', action.payload.error, action.payload.errorCode);
      break;
    }
    default:
      return state;
  }
};
