export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTEX': {
      return [...state, action.payload];
    }
    case 'ADD_ALL': {
      return action.payload;
    }
    case 'DELETE_NOTE': {
      const deleteNote = state.filter(x => x._id !== action.payload);
      return deleteNote;
    }
    default:
      return state;
  }
};
