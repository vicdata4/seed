export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTEX': {
      console.log('hola', action.payload);  
      return [...state, action.payload];
    }
    case 'ADD_ALL': {
      console.log('hola', action.payload);  
      return action.payload;
    }
    case 'DELETE_NOTE': {
      const deleteNote = state.filter((x, i) => i !== action.payload);
      return deleteNote;
    }
    default:
      return state;
  }
};
