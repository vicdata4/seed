import * as request from './http/requests';

export const deleteNote = (action) => {
  return (dispatch) => request.deleteNoteRequest(dispatch, action);
};

export const addNote = (action) => {
  return (dispatch) => request.addNoteRequest(dispatch, action);
};

export const getNotes = () => {
  return (dispatch) => request.getNotesRequest(dispatch);
};
