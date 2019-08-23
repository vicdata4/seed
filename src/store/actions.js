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

export const addNoteX_ = (action) => {
  return globalFetch('POST', 'ADD_NOTEX', { title: action, content: 'lol' });
};

export const getNotes = () => {
  return globalFetch('GET', 'ADD_ALL');
};

export const globalFetch = (type, action, body = undefined) => {
  return (dispatch) => {
    const url = 'http://localhost:3000/notes';
    fetch(url, {
      method: type,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      referrer: 'no-referrer',
      body: JSON.stringify(body) || undefined,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        dispatch({
          type: action,
          payload: response
        });
      }).catch(error => console.error('Error:', error));
  };
};
