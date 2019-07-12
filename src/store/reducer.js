export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'DELETE_NOTE': {
      const deleteNote = state.filter((x, i) => i !== action.payload);
      return deleteNote;
    }
    default:
      return state;
  }
};
