export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return { notes: [...state.notes, action.payload] };
    }
    case 'GET_ALL': {
      return { notes: action.payload };
    }
    case 'DELETE_NOTE': {
      const deleteNote = state.notes.filter(x => x._id !== action.payload);
      return { notes: deleteNote };
    }
    case 'LOGIN_AUTH': {
      document.cookie = `token=${action.payload.token};`;
      window.location = '/appx';
      break;
    }
    case 'LOGIN_FAILED': {
      return { loginError: action.payload };
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
