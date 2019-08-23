import { delete_, post_, get_ } from './fetch.config';
const url = 'http://localhost:3000/notes';

export const deleteNote = (action) => {
  return (dispatch) => {
    fetch(`${url}/${action}`, delete_())
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'DELETE_NOTE', payload: response.id });
      }).catch(error => console.error('Error:', error));
  };
};

export const addNote = (action) => {
  return (dispatch) => {
    fetch(url, post_(action))
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'ADD_NOTEX', payload: response });
      }).catch(error => console.error('Error:', error));
  };
};

export const getNotes = () => {
  return (dispatch) => {
    fetch(url, get_())
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'ADD_ALL', payload: response });
      }).catch(error => console.error('Error:', error));
  };
};
