
export const addNote = (action) => {
  return {
    type: 'ADD_NOTE',
    payload: action
  };
};

export const deleteNote = (action) => {
  return {
    type: 'DELETE_NOTE',
    payload: action
  };
};
