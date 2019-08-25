import fetch, { http, url } from './fetch.config';

export const getNotes = () => {
  return async(dispatch) => {
    const response = await fetch(http.get());
    if (!response.error) {
      dispatch({ type: 'GET_ALL', payload: response });
    } else {
      dispatch({ type: 'CATCH_ERROR', payload: response });
    }
  };
};

export const addNote = (body) => {
  return async(dispatch) => {
    const response = await fetch(http.post(body));
    if (!response.error) {
      dispatch({ type: 'ADD_NOTE', payload: response });
    } else {
      dispatch({ type: 'CATCH_ERROR', payload: response });
    }
  };
};

export const deleteNote = (noteId) => {
  return async(dispatch) => {
    const response = await fetch(http.delete(), `${url}/${noteId}`);
    if (!response.error) {
      dispatch({ type: 'DELETE_NOTE', payload: response.id });
    } else {
      dispatch({ type: 'CATCH_ERROR', payload: response });
    }
  };
};
