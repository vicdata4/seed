import * as config from './fetch.config';

export const deleteNoteRequest = (dispatch, action) => {
  fetch(`${config.url}/${action}`, config.del()).then(res => res.json())
    .then(response => dispatch({ type: 'DELETE_NOTE', payload: response.id }))
    .catch(error => console.error('Error:', error));
};

export const addNoteRequest = (dispatch, action) => {
  fetch(config.url, config.post(action)).then(res => res.json())
    .then(response => dispatch({ type: 'ADD_NOTEX', payload: response }))
    .catch(error => console.error('Error:', error));
};

export const getNotesRequest = (dispatch) => {
  fetch(config.url, config.get()).then(res => res.json())
    .then(response => dispatch({ type: 'ADD_ALL', payload: response }))
    .catch(error => console.error('Error:', error));
};
