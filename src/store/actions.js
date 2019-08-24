
import fetch, * as request from './fetch.config';

export const addNote = (body) => {
  return async(dispatch) => {
    const response = await fetch(request.post(body));
    if (!response.error) {
      dispatch({ type: 'ADD_NOTE', payload: response });
    } else {
      dispatch({ type: 'CATCH_ERROR', payload: response });
    }
  };
};

export const getNotes = () => {
  return async(dispatch) => {
    const response = await fetch(request.get());
    if (!response.error) {
      dispatch({ type: 'GET_ALL', payload: response });
    } else {
      dispatch({ type: 'CATCH_ERROR', payload: response });
    }
  };
};

export const deleteNote = (noteId) => {
  return async(dispatch) => {
    const response = await fetch(request.del(), `${request.url}/${noteId}`);
    if (!response.error) {
      dispatch({ type: 'DELETE_NOTE', payload: response.id });
    } else {
      dispatch({ type: 'CATCH_ERROR', payload: response });
    }
  };
};
