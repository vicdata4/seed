export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      // console.log(action.payload);
      return [...state, action.payload];
    }
    case 'GET_ALL': {
      return action.payload;
    }
    case 'DELETE_NOTE': {
      const deleteNote = state.filter(x => x._id !== action.payload);
      return deleteNote;
    }
    case 'LOGIN_AUTH': {
      document.cookie = `token=${action.payload.token};`;
      window.location = '/appx';
      break;
    }
    case 'LOGIN_FAILED': {
      // eslint-disable-next-line no-console
      console.log(action.payload);
      break;
    }
    case 'CATCH_ERROR': {
      const string = `error: ${action.payload.error} errorCode: ${action.payload.errorCode}`;
      // eslint-disable-next-line no-console
      console.log('****CATCHED:', string);
      break;
    }
    default:
      return state;
  }
};
