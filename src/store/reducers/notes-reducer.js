export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
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
      return;
    }
    case 'LOGIN_FAILED': {
      return;
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
